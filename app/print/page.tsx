import { CareerBackground } from "@/components/about/career-background";
import { Certifications } from "@/components/about/certifications";
import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Highlights } from "@/components/about/highlights";
import { Skills } from "@/components/about/skills";
import { PrintBlock, PrintSectionHead } from "@/components/print/print-block";
import { PrintHeader } from "@/components/print/print-header";
import { PrintSummary } from "@/components/print/print-summary";
import { PrintReveal } from "@/components/layout/print-reveal";
import { PrintTrigger } from "@/components/layout/print-trigger";
import { Projects } from "@/components/projects/projects";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Alex Petrides — Portfolio",
  description: "Printable portfolio and resume for Alex Petrides.",
  path: "/print",
  noIndex: true,
});

export default function PrintPage(): ReactNode {
  return (
    <PrintReveal>
      <main id="main-content" className="print-document flex flex-1 flex-col">
        <PrintTrigger />

        <div className="mx-auto flex w-full max-w-275 flex-col gap-6 px-6 py-8 sm:px-10 sm:py-10">
          <PrintHeader />

          <PrintBlock>
            <PrintSectionHead
              label="Selected work"
              title="Client projects"
              description="Travel, real estate, corporate, and SaaS platforms delivered end to end."
            />
            <Projects embedded forPrint />
          </PrintBlock>

          <PrintSummary />

          <CareerBackground forPrint />
          <Education forPrint />
          <Certifications forPrint />
          <Experience defaultExpanded forPrint />
          <Highlights forPrint />
          <Skills forPrint />
        </div>
      </main>
    </PrintReveal>
  );
}
