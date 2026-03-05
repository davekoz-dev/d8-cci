import { getSupabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('news')
    .select('id, title, description, date, image_url, href')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('[news API]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data ?? []);
}
