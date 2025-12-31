import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

import { Logo } from "../components/Logo";
import { COMPANY, telHref } from "../lib/company";

export function Footer() {
  return (
    <footer className="bg-[#1A160B] text-[#F4F0E6]/80 py-12 border-t border-[#2B2413]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-2xl px-3 py-2 shadow-sm">
                <Logo className="h-[66px] sm:h-[72px]" alt={COMPANY.name} />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional roofing services in {COMPANY.serviceAreaLong}. Quality workmanship, fully
              insured, and customer focused.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#E7DDC9] transition-colors">
                  New Roofs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7DDC9] transition-colors">
                  Roof Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7DDC9] transition-colors">
                  Flat Roofing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7DDC9] transition-colors">
                  Chimneys
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {COMPANY.serviceAreaShort} (surrounding areas)
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />{" "}
                <a className="hover:text-[#E7DDC9] transition-colors" href={telHref(COMPANY.phoneRaw)}>
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Mon-Fri: 8am - 6pm
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Accreditations</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-600">
                NFRC
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-600">
                FMB
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2B2413] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/review" className="hover:text-[#E7DDC9]">
              Leave a Review
            </a>
            <a href="#" className="hover:text-[#E7DDC9]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E7DDC9]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E7DDC9]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
