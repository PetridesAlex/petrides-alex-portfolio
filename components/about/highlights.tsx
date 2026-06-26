"use client";

import {
  Bot,
  Cloud,
  Database,
  Globe,
  Mail,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Highlight = {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const HIGHLIGHTS: Highlight[] = [
  {
    id: "saas-crm",
    category: "SaaS",
    title: "Multi-tenant travel CRM",
    description:
      "Role-based access, AI-powered quotation generation, invoicing, and client management for travel agencies.",
    icon: Sparkles,
  },
  {
    id: "corporate-web",
    category: "Web",
    title: "Production corporate websites",
    description:
      "Next.js and Vercel deployments for travel, real estate, aviation, and corporate services.",
    icon: Globe,
  },
  {
    id: "ai-integration",
    category: "AI",
    title: "OpenAI workflow automation",
    description:
      "Automated itinerary creation, email drafting, quotation generation, and internal business workflows.",
    icon: Bot,
  },
  {
    id: "supabase",
    category: "Database",
    title: "Supabase architecture",
    description:
      "Authentication, row-level security, storage, and real-time functionality designed for production.",
    icon: Database,
  },
  {
    id: "email",
    category: "Integrations",
    title: "Transactional email systems",
    description:
      "Resend integration for contact forms, notifications, and automated client communication.",
    icon: Mail,
  },
  {
    id: "apis",
    category: "APIs",
    title: "REST API integrations",
    description:
      "Connections with external services, payment providers, and third-party platforms.",
    icon: Workflow,
  },
  {
    id: "devops",
    category: "DevOps",
    title: "Domains & deployment",
    description:
      "Custom domains, DNS configuration, SSL certificates, and production release management.",
    icon: Cloud,
  },
  {
    id: "automation",
    category: "Automation",
    title: "n8n business workflows",
    description:
      "AI-powered automation using n8n, webhooks, and external APIs to streamline operations.",
    icon: Workflow,
  },
  {
    id: "ui-seo",
    category: "UI/UX",
    title: "Responsive, SEO-ready sites",
    description:
      "Modern interfaces and search-optimized builds delivered across multiple industries.",
    icon: Globe,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

function HighlightCard({
  highlight,
  index,
  animate,
}: {
  highlight: Highlight;
  index: number;
  animate: boolean;
}): ReactNode {
  const Icon = highlight.icon;

  const card = (
    <div className="border-foreground/8 hover:border-foreground/15 group relative h-full overflow-hidden rounded-3xl border bg-background p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div
        aria-hidden="true"
        className="bg-foreground/3 pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex items-start gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium tabular-nums tracking-[0.12em] text-foreground/35">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="border-foreground/10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-foreground/3 transition-colors duration-300 group-hover:bg-foreground/6">
            <Icon className="h-4.5 w-4.5 text-foreground/80" aria-hidden="true" />
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5">
          <span className="w-fit rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/50">
            {highlight.category}
          </span>
          <h4 className="text-[16px] font-semibold leading-snug tracking-tight text-foreground sm:text-[17px]">
            {highlight.title}
          </h4>
          <p className="text-[14px] leading-[1.65] tracking-tight text-foreground/60">
            {highlight.description}
          </p>
        </div>
      </div>
    </div>
  );

  if (!animate) {
    return <li className="list-none">{card}</li>;
  }

  return (
    <motion.li variants={cardVariants} className="list-none">
      {card}
    </motion.li>
  );
}

export function Highlights(): ReactNode {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <section className="flex flex-col gap-5">
      <div className="border-foreground/8 flex flex-col gap-1.5 border-b pb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          Track record
        </p>
        <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
          Key achievements
        </h3>
        <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55 sm:text-[15px]">
          Selected deliverables across SaaS, corporate web, AI integration, and
          business automation.
        </p>
      </div>

      {animate ? (
        <motion.ul
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={listVariants}
        >
          {HIGHLIGHTS.map((highlight, index) => (
            <HighlightCard
              key={highlight.id}
              highlight={highlight}
              index={index}
              animate
            />
          ))}
        </motion.ul>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {HIGHLIGHTS.map((highlight, index) => (
            <HighlightCard
              key={highlight.id}
              highlight={highlight}
              index={index}
              animate={false}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
