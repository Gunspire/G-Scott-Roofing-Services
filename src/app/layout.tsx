import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "../lib/company";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY.name} | Roofing in ${COMPANY.serviceAreaShort}`,
  description: `Roofing services in ${COMPANY.serviceAreaLong}. New roofs, repairs, flat roofing, guttering, and emergency call-outs. Get a free quote today.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
