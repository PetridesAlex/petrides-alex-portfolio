import type { ComponentType, ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { socialLinks } from "@/lib/social";

type ContactLink = {
  label: string;
  href: string;
  display: string;
  external: boolean;
  icon?: ComponentType<{ className?: string }>;
  imageSrc?: string;
};

const CV_FACTS = [
  { label: "Role", value: "Full-Stack Developer & Founder" },
  { label: "Agency", value: "WebRunner Agency" },
  { label: "Location", value: "Limassol, Cyprus" },
  { label: "Availability", value: "Worldwide · Remote" },
];

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${socialLinks.email}`,
    display: socialLinks.email,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: socialLinks.whatsapp,
    display: socialLinks.phone,
    imageSrc: "/whatsapp.svg",
    external: true,
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    display: "GitHub",
    imageSrc: "/github.svg",
    external: true,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    display: "LinkedIn",
    imageSrc: "/linkedin.svg",
    external: true,
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    display: "Instagram",
    imageSrc: "/instagram.svg",
    external: true,
  },
];

const PILLARS = [
  {
    label: "Performance",
    description: "Production-ready systems built for speed and reliability.",
  },
  {
    label: "User Experience",
    description: "Clear interfaces designed around real user needs.",
  },
  {
    label: "Scalability",
    description: "Architecture that supports growth without rework.",
  },
  {
    label: "Business Value",
    description: "Software tied to measurable outcomes and ROI.",
  },
];

const FOCUS_AREAS = [
  "Artificial Intelligence",
  "Cloud Technologies",
  "Fintech",
  "Automation",
  "Scalable SaaS",
];

function CvSection({
  label,
  title,
  children,
}: {
  label: string;
  title?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <section className="flex flex-col gap-5">
      <div className="border-foreground/8 flex flex-col gap-1.5 border-b pb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          {label}
        </p>
        {title ? (
          <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
            {title}
          </h3>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function Journey(): ReactNode {
  return (
    <FadeIn>
      <article className="overflow-hidden rounded-4xl border border-foreground/8 bg-background shadow-sm">
        {/* CV header */}
        <header className="border-foreground/8 border-b bg-foreground text-background">
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-8 lg:gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-background/50">
                  Professional Profile
                </p>
                <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight sm:text-[2.75rem] lg:text-[3rem]">
                  Alex Petrides
                </h2>
                <p className="max-w-[52ch] text-[16px] leading-relaxed tracking-tight text-background/75 sm:text-[17px]">
                  Full-stack developer building web applications, SaaS platforms,
                  CRM systems, and AI-powered automation for businesses worldwide.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {CV_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-background/15 bg-background/5 px-4 py-4 backdrop-blur-sm"
                  >
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-background/45">
                      {fact.label}
                    </span>
                    <p className="mt-2 text-[14px] font-medium leading-snug tracking-tight text-background sm:text-[15px]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 border-t border-background/15 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-background/50" aria-hidden="true" />
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-background/50">
                    Contact &amp; profiles
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {CONTACT_LINKS.map((link) => {
                    const props = link.external
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {};

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="focus-ring group flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 transition-colors hover:bg-background/10"
                        {...props}
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-background/15 bg-background/10">
                          {link.icon ? (
                            <link.icon
                              className="h-4 w-4 text-background/85"
                              aria-hidden="true"
                            />
                          ) : link.imageSrc ? (
                            <Image
                              src={link.imageSrc}
                              alt=""
                              width={14}
                              height={14}
                              aria-hidden="true"
                              className="max-h-[14px] max-w-[14px] object-contain invert"
                            />
                          ) : null}
                        </span>
                        <span className="flex min-w-0 flex-col gap-0.5">
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-background/45">
                            {link.label}
                          </span>
                          <span className="truncate text-[13px] font-medium tracking-tight text-background/90">
                            {link.display}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CV body */}
        <div className="flex flex-col gap-12 px-6 py-10 sm:px-10 sm:py-12">
          <CvSection label="Summary" title="My Journey">
            <div className="space-y-5 text-[16px] leading-[1.75] tracking-tight text-foreground/75 sm:text-[17px]">
              <p>
                What started as a passion for technology and solving real
                business problems has grown into a professional career in
                software development.
              </p>
              <p>
                After years of learning, building real-world applications, and
                working with modern technologies, I founded{" "}
                <strong className="font-semibold text-foreground">
                  WebRunner Agency
                </strong>
                , a digital agency focused on high-performance websites,
                scalable software, AI-powered solutions, CRM systems, SaaS
                platforms, and business automation tools.
              </p>
              <p>
                Since launching WebRunner Agency, I have delivered projects
                across travel, real estate, aviation, corporate services, and
                fintech — helping businesses modernize their digital presence,
                automate operations, and build software that drives growth.
              </p>
              <p>
                My goal is not only to build polished interfaces, but to ship
                digital products and intelligent software that solve real
                problems and create long-term business value.
              </p>
            </div>
          </CvSection>

          <CvSection label="Philosophy">
            <blockquote className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-foreground px-8 py-8 shadow-md sm:px-10 sm:py-10">
              <p
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 right-6 font-serif text-[5rem] leading-none text-background/10 select-none sm:text-[6rem]"
              >
                &ldquo;
              </p>
              <p className="relative font-serif text-[1.35rem] font-medium leading-[1.55] tracking-tight text-background sm:text-[1.55rem] lg:text-[1.65rem]">
                Software should simplify complex processes, improve efficiency,
                and create lasting value. That philosophy guides every project I
                undertake.
              </p>
            </blockquote>
          </CvSection>

          <CvSection label="Approach" title="How I work">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.label}
                  className="border-foreground/8 rounded-2xl border bg-background px-4 py-4"
                >
                  <p className="text-[14px] font-semibold tracking-tight text-foreground">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed tracking-tight text-foreground/55">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection label="Growth" title="Areas of focus">
            <div className="flex flex-col gap-4">
              <p className="text-[15px] leading-relaxed tracking-tight text-foreground/65">
                I continue expanding my expertise with the ambition of building
                products that serve businesses worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-foreground/8 bg-foreground/3 px-4 py-2 text-[13px] tracking-tight text-foreground/75 dark:bg-foreground/6"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </CvSection>
        </div>
      </article>
    </FadeIn>
  );
}
