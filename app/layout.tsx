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
