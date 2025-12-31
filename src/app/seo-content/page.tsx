import type { Metadata } from "next";
import React from "react";

import { Header } from "../../sections/Header";
import { Footer } from "../../sections/Footer";
import { SeoContentSection } from "../../sections/SeoContentSection";
import { COMPANY } from "../../lib/company";

export const metadata: Metadata = {
  title: `SEO + Content | ${COMPANY.name}`,
  description: "Demo: on‑page SEO and content that helps Google understand your services and rank you higher.",
};

export default function SeoContentPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <SeoContentSection />
      </main>
      <Footer />
    </div>
  );
}


