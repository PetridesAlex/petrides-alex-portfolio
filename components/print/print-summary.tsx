import type { ReactNode } from "react";

import { PrintBlock, PrintSectionHead } from "./print-block";

export function PrintSummary(): ReactNode {
  return (
    <PrintBlock>
      <PrintSectionHead label="Summary" title="My journey" />
      <div className="space-y-4 text-[14px] leading-[1.7] tracking-tight text-foreground/75">
        <p>
          What started as a passion for technology and solving real business
          problems has grown into a professional career in software development.
        </p>
        <p>
          After years of learning, building real-world applications, and working
          with modern technologies, I founded{" "}
          <strong className="font-semibold text-foreground">
            WebRunner Agency
          </strong>
          , a digital agency focused on high-performance websites, scalable
          software, AI-powered solutions, CRM systems, SaaS platforms, and
          business automation tools.
        </p>
        <p>
          Since launching WebRunner Agency, I have delivered projects across
          travel, real estate, aviation, corporate services, and fintech —
          helping businesses modernize their digital presence, automate
          operations, and build software that drives growth.
        </p>
      </div>

      <blockquote className="mt-5 rounded-xl border border-foreground/12 bg-foreground/[0.03] px-5 py-5">
        <p className="font-serif text-[1.05rem] font-medium leading-[1.55] tracking-tight text-foreground">
          Software should simplify complex processes, improve efficiency, and
          create lasting value. That philosophy guides every project I
          undertake.
        </p>
      </blockquote>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
        {[
          {
            label: "Performance",
            text: "Production-ready systems built for speed and reliability.",
          },
          {
            label: "User Experience",
            text: "Clear interfaces designed around real user needs.",
          },
          {
            label: "Scalability",
            text: "Architecture that supports growth without rework.",
          },
          {
            label: "Business Value",
            text: "Software tied to measurable outcomes and ROI.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="print-block-item rounded-xl border border-foreground/10 px-4 py-3"
          >
            <p className="text-[13px] font-semibold tracking-tight text-foreground">
              {item.label}
            </p>
            <p className="mt-1 text-[12px] leading-relaxed tracking-tight text-foreground/60">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </PrintBlock>
  );
}
