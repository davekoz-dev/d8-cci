import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AOSInit } from "@/components/aos-init";
import "./globals.css";

const firaSans = Fira_Sans({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-fira-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "D-8 Indonesia Chairmanship 2026-2027",
  description: "Official website for Indonesia's D-8 Chairmanship 2026-2027. Navigating Global Shifts: Strengthening Equality, Solidarity, and Cooperation for Shared Prosperity.",
  keywords: ["D-8", "Indonesia", "Chairmanship", "Summit 2026", "Jakarta", "Developing-8", "Economic Cooperation"],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} font-sans antialiased`}
      >
        <AOSInit />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
