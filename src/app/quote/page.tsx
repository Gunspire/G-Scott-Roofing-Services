import type { Metadata } from "next";
import React from "react";

import { Footer } from "../../sections/Footer";
import { Header } from "../../sections/Header";
import { InvoiceQuoteSection } from "../../sections/InvoiceQuoteSection";
import { COMPANY } from "../../lib/company";

export const metadata: Metadata = {
  title: `Quote Builder | ${COMPANY.name}`,
  description: "Generate a quote summary PDF (demo).",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <InvoiceQuoteSection />
      </main>
      <Footer />
    </div>
  );
}


