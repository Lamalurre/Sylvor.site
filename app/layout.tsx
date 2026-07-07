import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeadFlow — Stop losing leads to slow replies",
  description:
    "LeadFlow reads your incoming inquiries, estimates pricing, flags what's missing, and drafts a ready-to-send reply — you stay in control of every message that goes out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink antialiased relative">
        <div className="bg-glow-field" aria-hidden="true" />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
