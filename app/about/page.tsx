import { CareerBackground } from "@/components/about/career-background";
import { Certifications } from "@/components/about/certifications";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Highlights } from "@/components/about/highlights";
import { Journey } from "@/components/about/journey";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Full-stack developer building web applications, SaaS CRM platforms, AI integrations, and business automation systems.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-40 pb-10 sm:px-10 sm:pt-56 sm:pb-14">
        <FadeIn>
          <div className="mb-10 flex flex-col gap-2 text-center sm:mb-12 sm:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
              Resume
            </p>
            <h1 className="font-serif text-[2rem] font-medium tracking-tight text-foreground sm:text-[2.75rem]">
              About &amp; experience
            </h1>
            <p className="mx-auto max-w-[50ch] text-[17px] leading-[1.65] tracking-tight text-foreground/60 sm:mx-0 sm:text-[18px]">
              A portfolio-ready overview of my background, skills, and the work
              I deliver for clients and teams.
            </p>
          </div>
        </FadeIn>
        <Journey />
      </section>

      <section className="mx-auto w-full max-w-275 px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-12">
            <CareerBackground />
            <Education />
            <Certifications />
            <Experience />
            <Highlights />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
