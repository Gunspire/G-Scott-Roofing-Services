import React from "react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { COMPANY, telHref } from "../lib/company";

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading subtitle="Service Area">{COMPANY.serviceAreaLong}</SectionHeading>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We’re based in {COMPANY.serviceAreaShort} and cover surrounding areas for roof repairs, new
              roofs, flat roofing, guttering, and emergency call-outs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Local areas",
                  items: ["Swanley", "Hextable", "Crockenhill", "Wilmington"],
                },
                {
                  title: "Wider coverage",
                  items: ["Dartford", "Orpington", "Bexley", "Sevenoaks", "Sidcup", "Gravesend"],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <p className="font-bold text-slate-900">{block.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {block.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#89713B]/80" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#contact">
                Check Availability
              </Button>
              <Button variant="outline" as="a" href={telHref(COMPANY.phoneRaw)}>
                Call {COMPANY.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <div className="aspect-square relative">
                <iframe
                  title={`Service area map (${COMPANY.serviceAreaShort})`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${COMPANY.serviceAreaShort}, UK`
                  )}&z=11&output=embed`}
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#89713B]/80 bg-[#89713B]/10 shadow-[0_0_0_8px_rgba(137,113,59,0.12)]"
                  style={{ width: "72%", height: "72%" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
