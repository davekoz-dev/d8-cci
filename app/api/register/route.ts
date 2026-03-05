import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import QRCode from 'qrcode';
import { getAdminSupabase } from '@/lib/supabase';

const EVENT_LABELS: Record<string, { label: string; date: string; location: string }> = {
  ministerial: { label: 'Senior Officials & Ministerial Meeting', date: '12–14 April 2026', location: 'Jakarta, Indonesia' },
  'business-forum': { label: 'D-8 Business Leaders Forum', date: '14 April 2026', location: 'Fairmont Hotel, Jakarta' },
  summit: { label: '11th D-8 Summit', date: '14 April 2026', location: 'JICC, Jakarta' },
  'halal-expo': { label: 'D-8 Halal Expo Indonesia', date: '14–18 April 2026', location: 'Jakarta, Indonesia' },
};

export async function POST(req: Request) {
  try {
    const { name, email, company = '', phone = '', event } = await req.json();

    if (!name || !email || !event) {
      return NextResponse.json({ error: 'Name, email and event are required.' }, { status: 400 });
    }

    const eventInfo = EVENT_LABELS[event] ?? { label: event, date: 'April 2026', location: 'Jakarta, Indonesia' };
    const timestamp = new Date().toLocaleString('en-ID', { timeZone: 'Asia/Jakarta' });

    // 1. Save to Supabase → get unique token
    let token: string | null = null;
    let registrationId: string | null = null;
    try {
      const db = getAdminSupabase();
      const { data: reg, error: dbError } = await db
        .from('registrations')
        .insert({ name, email, company, phone, event })
        .select('token, id')
        .single();
      if (dbError) console.error('DB insert error:', dbError);
      else { token = reg.token; registrationId = reg.id; }
    } catch (dbErr) {
      console.error('DB error:', dbErr);
    }

    // 2. Generate QR — encode participant data + token as JSON
    let qrBase64: string | null = null;
    if (token) {
      try {
        const qrPayload = JSON.stringify({
          name,
          company: company || '',
          email,
          phone: phone || '',
          event: eventInfo.label,
          token,
        });
        const qrDataUrl = await QRCode.toDataURL(qrPayload, {
          width: 300,
          margin: 2,
          color: { dark: '#055090', light: '#ffffff' },
          errorCorrectionLevel: 'M',
        });
        qrBase64 = qrDataUrl.replace('data:image/png;base64,', '');
      } catch (qrErr) {
        console.error('QR generation error:', qrErr);
      }
    }

    // 3. Send confirmation email with QR via Gmail SMTP
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: gmailUser, pass: gmailPass },
        });

        const qrSection = qrBase64
          ? `<div style="text-align:center;margin:24px 0;">
              <p style="color:#414042;font-size:13px;margin-bottom:8px;font-weight:600;">Your Event QR Code</p>
              <p style="color:#6b7280;font-size:12px;margin-bottom:12px;">Show this QR code at the registration desk on event day.</p>
              <img src="cid:qrcode" alt="QR Code" width="200" height="200"
                style="display:block;margin:0 auto;border:4px solid #055090;border-radius:8px;" />
              <p style="color:#9ca3af;font-size:11px;margin-top:8px;">ID: ${registrationId ?? 'N/A'}</p>
             </div>`
          : `<p style="color:#6b7280;font-size:12px;text-align:center;margin:16px 0;">Registration ID: ${registrationId ?? 'N/A'}</p>`;

        await transporter.sendMail({
          from: `D-8 CCI 2026 <${gmailUser}>`,
          to: email,
          subject: `Registration Confirmed — ${eventInfo.label}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
              <div style="background:linear-gradient(to right,#055090,#00B3AA);padding:28px 24px;">
                <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Registration Confirmed ✓</h1>
                <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">D-8 CCI Summit 2026 — Jakarta, Indonesia</p>
              </div>
              <div style="padding:24px;">
                <p style="color:#282561;font-size:15px;margin:0 0 20px;">Dear <strong>${name}</strong>,</p>
                <p style="color:#414042;font-size:14px;margin:0 0 20px;">Your registration has been confirmed. Please show the QR code below at the registration desk on event day.</p>
                <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:8px;">
                  <tr style="border-bottom:1px solid #f3f4f6;">
                    <td style="padding:10px 0;color:#6b7280;width:130px;">Event</td>
                    <td style="padding:10px 0;color:#055090;font-weight:700;">${eventInfo.label}</td>
                  </tr>
                  ${company ? `<tr style="border-bottom:1px solid #f3f4f6;"><td style="padding:10px 0;color:#6b7280;">Company</td><td style="padding:10px 0;color:#111827;">${company}</td></tr>` : ''}
                  <tr style="border-bottom:1px solid #f3f4f6;">
                    <td style="padding:10px 0;color:#6b7280;">Date</td>
                    <td style="padding:10px 0;color:#111827;">${eventInfo.date}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;color:#6b7280;">Location</td>
                    <td style="padding:10px 0;color:#111827;">${eventInfo.location}</td>
                  </tr>
                </table>
                ${qrSection}
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
                <p style="color:#9ca3af;font-size:12px;text-align:center;margin:0;">
                  For questions, contact the organizing committee.<br/>
                  Registered on ${timestamp} WIB
                </p>
              </div>
            </div>`,
          ...(qrBase64 ? {
            attachments: [{
              filename: 'qr-code.png',
              content: Buffer.from(qrBase64, 'base64'),
              cid: 'qrcode',
            }],
          } : {}),
        });
        console.log('Confirmation sent to', email);
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }
    } else {
      console.warn('Email not sent: GMAIL_USER or GMAIL_APP_PASSWORD not set');
    }

    console.log('Registration:', { name, company, email, phone, event: eventInfo.label, token, timestamp });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Register API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
