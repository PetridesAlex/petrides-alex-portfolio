"use client";

import {
  Bot,
  Cloud,
  Code2,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type SkillGroup = {
  id: string;
  label: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces, components, and responsive UI.",
    items: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    icon: Code2,
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, server logic, and integrations.",
    items: ["Node.js", "Express.js", "REST APIs"],
    icon: Server,
  },
  {
    id: "databases",
    label: "Databases",
    description: "Data modeling, auth, and real-time systems.",
    items: ["PostgreSQL", "Supabase", "SQL"],
    icon: Database,
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    description: "Shipping, hosting, and infrastructure.",
    items: ["Vercel", "Git & GitHub", "Cloudflare", "DNS Management"],
    icon: Cloud,
  },
  {
    id: "ai",
    label: "AI & Automation",
    description: "Intelligent workflows and connected services.",
    items: [
      "OpenAI API",
      "AI Assistants",
      "Prompt Engineering",
      "n8n",
      "Webhooks",
      "API Integrations",
      "Resend",
      "Slack Integrations",
    ],
    icon: Bot,
  },
  {
    id: "tools",
    label: "Tools",
    description: "Design, debugging, and day-to-day development.",
    items: ["Cursor AI", "VS Code", "Figma", "Postman"],
    icon: Wrench,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

function SkillGroupCard({
  group,
  animate,
  forPrint = false,
}: {
  group: SkillGroup;
  animate: boolean;
  forPrint?: boolean;
}): ReactNode {
  const Icon = group.icon;

  const card = (
    <div
      className={`border-foreground/8 relative h-full overflow-hidden rounded-3xl border bg-background p-5 sm:p-6 ${forPrint ? "print-block-item rounded-xl border-foreground/10 p-4" : "hover:border-foreground/15 group transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md"}`}
    >
      <div
        aria-hidden="true"
        className="bg-foreground/3 pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/40">
              Stack
            </span>
            <h4 className="text-[17px] font-semibold tracking-tight text-foreground">
              {group.label}
            </h4>
            <p className="text-[13px] leading-relaxed tracking-tight text-foreground/55">
              {group.description}
            </p>
          </div>
          <span className="border-foreground/10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-foreground/3 transition-colors duration-300 group-hover:bg-foreground/6">
            <Icon className="h-4.5 w-4.5 text-foreground/80" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-foreground/2 px-3 py-1.5 text-[12px] tracking-tight text-foreground/80 transition-colors duration-200 hover:border-foreground/15 hover:bg-foreground/5 hover:text-foreground sm:text-[13px]"
            >
              {skill}
            </span>
          ))}
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

export function Skills({ forPrint = false }: { forPrint?: boolean }): ReactNode {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion && !forPrint;

  return (
    <section
      className={`flex flex-col gap-5 ${forPrint ? "print-block print-block--allow-break" : ""}`}
    >
      <div
        className={`border-foreground/8 flex flex-col gap-1.5 border-b pb-4 ${forPrint ? "print-section-head" : ""}`}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          Technical expertise
        </p>
        <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
          Technologies
        </h3>
        <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55 sm:text-[15px]">
          Modern web applications, CRM platforms, SaaS products, AI
          integrations, and business automation.
        </p>
      </div>

      {animate ? (
        <motion.ul
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard key={group.id} group={group} animate />
          ))}
        </motion.ul>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard
              key={group.id}
              group={group}
              animate={false}
              forPrint={forPrint}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
