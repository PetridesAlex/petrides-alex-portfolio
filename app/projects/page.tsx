import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected client work across travel, real estate, corporate, and SaaS.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-36 pb-20 sm:px-10 sm:pt-44">
        <FadeIn className="flex flex-col items-center gap-4 pb-10 text-center sm:gap-5 sm:pb-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-foreground/45">
            Selected work
          </p>
          <h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            Client projects
          </h1>
          <p className="max-w-[38ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            Travel agencies, real estate, corporate groups, and SaaS — each
            built to feel considered, credible, and ready for business.
          </p>
        </FadeIn>
        <Projects embedded />
      </section>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
