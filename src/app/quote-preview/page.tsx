import type { Metadata } from "next";
import React from "react";

import { QuotePreview } from "../../components/QuotePreview";
import { COMPANY } from "../../lib/company";

export const metadata: Metadata = {
  title: `Quote Preview | ${COMPANY.name}`,
  description: `Preview and print a quote PDF for ${COMPANY.name}.`,
};

export default function QuotePreviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <QuotePreview />
    </div>
  );
}


