import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";

import { socialLinks } from "@/lib/social";

const FACTS = [
  { label: "Role", value: "Full-Stack Developer & Founder" },
  { label: "Agency", value: "WebRunner Agency" },
  { label: "Location", value: "Limassol, Cyprus" },
  { label: "Availability", value: "Worldwide · Remote" },
] as const;

const CONTACT_ITEMS = [
  { label: "Email", value: socialLinks.email, icon: Mail },
  { label: "Phone", value: socialLinks.phone, icon: Phone },
  { label: "LinkedIn", value: "alexandros-petrides", icon: Linkedin },
  { label: "GitHub", value: "PetridesAlex", icon: Github },
  { label: "Instagram", value: "@petridesalex", icon: Instagram },
  { label: "WhatsApp", value: socialLinks.phone, icon: Phone },
] as const;

export function PrintHeader(): ReactNode {
  return (
    <header className="print-block">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/45">
        Portfolio · Resume
      </p>
      <h1 className="mt-2 font-serif text-[2.1rem] font-medium tracking-tight text-foreground sm:text-[2.5rem]">
        Alex Petrides
      </h1>
      <p className="mt-2 max-w-[48ch] text-[16px] leading-relaxed tracking-tight text-foreground/70 sm:text-[17px]">
        Full-stack developer &amp; product engineer. I build modern web apps,
        CRM platforms, SaaS products, and AI-powered automation for businesses
        that need to scale.
      </p>

      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-foreground/10 bg-foreground/[0.02] px-4 py-3"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/45">
              {fact.label}
            </p>
            <p className="mt-1 text-[13px] font-medium tracking-tight text-foreground">
              {fact.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-foreground/10 pt-6">
        <div className="mb-4 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-foreground/50" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/45">
            Contact &amp; profiles
          </p>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="print-contact-item flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] px-3.5 py-3"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-foreground/12 bg-white">
                  <Icon
                    className="h-4 w-4 text-foreground"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/45">
                    {item.label}
                  </span>
                  <span className="truncate text-[13px] font-medium tracking-tight text-foreground">
                    {item.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
