"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const PROFILE_SUMMARY =
  "Motivated and disciplined professional with experience in sales, business development, and travel operations. I enjoy learning new skills and working with a variety of digital tools, including exploring different programming languages. I bring strong communication and teamwork abilities developed through client-focused roles and collaborative environments — dedicated to ongoing improvement and committed to delivering high-quality results in every task.";

const PROFILE_TRAITS = [
  "Sales & business development",
  "Travel operations",
  "Client communication",
  "Digital fluency",
];

type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
  icon: LucideIcon;
};

type Competency = {
  title: string;
  items: string[];
};

const ROLES: Role[] = [
  {
    id: "events",
    company: "Events & Exhibitions",
    title: "Event Promoter · Guest Experience Assistant",
    location: "Various Locations",
    period: "2024 – Present",
    highlights: [
      "Coordinated event setup, registration, and smooth daily operations.",
      "Provided guest support, hospitality, and information to visitors.",
      "Worked with event teams to maintain professional, welcoming standards.",
    ],
    icon: Users,
  },
  {
    id: "mr-porte",
    company: "Mr Porte",
    title: "Hospitality & Customer Service Assistant",
    location: "Amsterdam, Netherlands",
    period: "Sep 2022 – Sep 2025",
    highlights: [
      "Delivered front-of-house support in a high-demand hospitality environment.",
      "Assisted guests with requests, reservations, and general information.",
      "Strengthened communication and problem-solving in a multicultural setting.",
    ],
    icon: MapPin,
  },
  {
    id: "honeywell",
    company: "Honeywell Travel Ltd",
    title: "Customer Service & Business Development Executive",
    location: "Limassol, Cyprus",
    period: "Jun 2020 – Dec 2025",
    highlights: [
      "Handled travel bookings, quotations, and client inquiries.",
      "Supported business development and partner communication.",
      "Contributed to website development, content updates, and online customer support.",
    ],
    icon: Briefcase,
  },
  {
    id: "europcar",
    company: "ASG Ltd – Europcar Cyprus",
    title: "Sales Agent · Car Rental Station",
    location: "Limassol, Cyprus",
    period: "Jun 2021",
    highlights: [
      "Prepared rental quotations and completed car rental agreements.",
      "Conducted vehicle inspections and condition reporting.",
      "Supported efficient day-to-day station operations.",
    ],
    icon: Briefcase,
  },
  {
    id: "national-guard",
    company: "Cyprus National Guard",
    title: "National Service",
    location: "Cyprus",
    period: "Jul 2020",
    highlights: [
      "Completed military training focused on discipline and physical readiness.",
      "Developed resilience, teamwork, and structured operational skills.",
    ],
    icon: Calendar,
  },
];

const COMPETENCIES: Competency[] = [
  {
    title: "Organizational Skills",
    items: [
      "Strong time management and planning abilities",
      "Handles multiple responsibilities and deadlines",
      "Organized approach to tasks and coordination",
    ],
  },
  {
    title: "Teamwork & Collaboration",
    items: [
      "Effective collaboration across academic and professional roles",
      "Cooperative, reliable, and team-oriented",
    ],
  },
  {
    title: "Discipline & Goal Orientation",
    items: [
      "Self-motivated with a consistent work ethic",
      "Focused on achieving personal and professional goals",
    ],
  },
  {
    title: "Communication & Social Skills",
    items: [
      "Confident in client-facing interactions",
      "Professional, approachable, and organized in event environments",
    ],
  },
  {
    title: "Digital & Technical Skills",
    items: [
      "ECDL certified across all modules",
      "Python Institute certification",
      "Comfortable with modern digital tools and programming fundamentals",
    ],
  },
];

const INTERESTS = [
  "Travel & culture",
  "Technology & coding",
  "Continuous learning",
  "Events & community",
  "Professional growth",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

function ProfileOverview(): ReactNode {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  const card = (
    <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
      <blockquote className="relative overflow-hidden rounded-[1.35rem] border border-foreground/10 bg-foreground px-7 py-8 sm:px-9 sm:py-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-background/6 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-background/4 blur-2xl"
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -top-3 right-5 font-serif text-[4.5rem] leading-none text-background/10 select-none sm:right-7 sm:text-[5.5rem]"
        >
          &ldquo;
        </p>

        <div className="relative flex flex-col gap-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-background/45">
            Professional summary
          </p>
          <p className="max-w-[62ch] font-serif text-[1.1rem] font-medium leading-[1.72] tracking-tight text-background/95 sm:text-[1.2rem] lg:text-[1.28rem]">
            {PROFILE_SUMMARY}
          </p>
          <div className="flex flex-wrap gap-2 border-t border-background/12 pt-5">
            {PROFILE_TRAITS.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-background/15 bg-background/8 px-3.5 py-1.5 text-[12px] tracking-tight text-background/75 sm:text-[13px]"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </blockquote>
    </div>
  );

  if (!animate) {
    return card;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {card}
    </motion.div>
  );
}

function RoleCard({ role }: { role: Role }): ReactNode {
  const Icon = role.icon;

  return (
    <div className="border-foreground/8 hover:border-foreground/15 group relative overflow-hidden rounded-3xl border bg-background p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-5">
        <span className="border-foreground/10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-foreground/3">
          <Icon className="h-4.5 w-4.5 text-foreground/75" aria-hidden="true" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
                {role.company}
              </h4>
              <span className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/45">
                {role.period}
              </span>
            </div>
            <p className="text-[14px] font-medium tracking-tight text-foreground/70 sm:text-[15px]">
              {role.title}
            </p>
            <p className="text-[13px] tracking-tight text-foreground/45">
              {role.location}
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {role.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[13px] leading-relaxed tracking-tight text-foreground/65 sm:text-[14px]"
              >
                <span
                  aria-hidden="true"
                  className="bg-foreground/25 mt-2 h-1 w-1 shrink-0 rounded-full"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CareerBackground(): ReactNode {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  const timeline = (
    <ul className="relative flex flex-col gap-4">
      <div
        aria-hidden="true"
        className="bg-foreground/10 absolute bottom-6 left-[21px] top-6 hidden w-px sm:block"
      />
      {ROLES.map((role) => (
        <li key={role.id} className="relative list-none pl-0 sm:pl-14">
          <span
            aria-hidden="true"
            className="border-foreground/15 bg-background absolute left-[16px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 sm:block"
          />
          {animate ? (
            <motion.div variants={itemVariants}>
              <RoleCard role={role} />
            </motion.div>
          ) : (
            <RoleCard role={role} />
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="flex flex-col gap-8">
      <div className="border-foreground/8 flex flex-col gap-1.5 border-b pb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          Background
        </p>
        <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
          Profile overview
        </h3>
      </div>

      <ProfileOverview />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h4 className="text-[15px] font-semibold tracking-tight text-foreground">
            Professional experience
          </h4>
          <p className="text-[14px] tracking-tight text-foreground/55">
            Sales, hospitality, travel, and event operations across Cyprus and
            Europe.
          </p>
        </div>

        {animate ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={listVariants}
          >
            {timeline}
          </motion.div>
        ) : (
          timeline
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h4 className="text-[15px] font-semibold tracking-tight text-foreground">
            Core competencies
          </h4>
          <p className="text-[14px] tracking-tight text-foreground/55">
            Strengths developed across client-facing and team-based roles.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {COMPETENCIES.map((group) => (
            <div
              key={group.title}
              className="border-foreground/8 rounded-2xl border bg-background px-4 py-4 sm:px-5 sm:py-5"
            >
              <p className="text-[14px] font-semibold tracking-tight text-foreground">
                {group.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] leading-relaxed tracking-tight text-foreground/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-foreground/8 pt-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/40">
          Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-foreground/8 bg-foreground/3 px-3.5 py-1.5 text-[13px] tracking-tight text-foreground/70"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
