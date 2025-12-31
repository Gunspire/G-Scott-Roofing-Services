import React from "react";

import { Button } from "../components/Button";
import { COMPANY, telHref } from "../lib/company";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      <div className="absolute inset-0">
        <img src="/hero-2.png" alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#1A160B]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2413]/75 via-[#2B2413]/60 to-[#89713B]/25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Roofer You Can Trust?</h2>
        <p className="text-[#F4F0E6]/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          {"Don't let a small leak turn into a big problem. Contact our expert team today for a free inspection."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="white" size="md" as="a" href="#contact">
            Get a Free Quote
          </Button>
          <Button
            variant="outline"
            size="md"
            className="border-white text-white hover:bg-white/10"
            as="a"
            href={telHref(COMPANY.phoneRaw)}
          >
            Call {COMPANY.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
