"use client";

import { Briefcase, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  type: string;
  slug?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "WebRunner Agency",
    role: "Founder · Full-Stack Developer",
    period: "2024 – Present",
    type: "Agency",
    brand: "#0a0a0a",
  },
  {
    company: "Travel-Hub CRM",
    role: "SaaS Product · Full-Stack Development",
    period: "2025",
    type: "SaaS",
    brand: "#2b6cb0",
  },
  {
    company: "Komodromos Group",
    role: "Web Design & Development",
    period: "2025",
    type: "Corporate",
    brand: "#2d3748",
  },
  {
    company: "Honeywell Travel",
    role: "Web Design & Development",
    period: "2024",
    type: "Travel",
    brand: "#1a365d",
  },
  {
    company: "United Properties",
    role: "Web Design & Development",
    period: "2024",
    type: "Real Estate",
    brand: "#4a5568",
  },
  {
    company: "Kaja Management",
    role: "Web Design & Development",
    period: "2024",
    type: "Consulting",
    brand: "#1a202c",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const COLLAPSED_COUNT = 3;
const ROW_HEIGHT = 88;
const ROW_GAP = 12;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.company.charAt(0);
  return (
    <span
      className="ring-foreground/10 inline-flex h-12 w-12 shrink-0 items-center justify-center ring-1"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        backgroundColor: entry.brand,
      }}
    >
      <span className="text-[17px] font-semibold tracking-tight text-white">
        {initials}
      </span>
    </span>
  );
}

function ExperienceCard({ entry }: { entry: Entry }): ReactNode {
  return (
    <div className="border-foreground/8 hover:border-foreground/15 group relative overflow-hidden rounded-3xl border bg-background p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div
        aria-hidden="true"
        className="bg-foreground/3 pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex items-start gap-4">
        <CompanyLogo entry={entry} />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-[18px]">
              {entry.company}
            </h4>
            <span className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/50">
              {entry.type}
            </span>
          </div>
          <p className="text-[14px] font-medium tracking-tight text-foreground/70 sm:text-[15px]">
            {entry.role}
          </p>
          <p className="text-[13px] tracking-tight text-foreground/45">
            {entry.period}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;
  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = ENTRIES.length - Math.floor(COLLAPSED_COUNT);

  const timeline = (
    <div className="relative">
      <div
        aria-hidden="true"
        className="bg-foreground/10 absolute bottom-4 left-[23px] top-4 hidden w-px sm:block"
      />

      <ul className="relative flex flex-col gap-3">
        {ENTRIES.map((entry) => {
          const card = <ExperienceCard entry={entry} />;

          if (!animate) {
            return (
              <li key={`${entry.company}-${entry.period}`} className="relative list-none pl-0 sm:pl-14">
                <span
                  aria-hidden="true"
                  className="border-foreground/15 bg-background absolute left-[18px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 sm:block"
                />
                {card}
              </li>
            );
          }

          return (
            <motion.li
              key={`${entry.company}-${entry.period}`}
              variants={itemVariants}
              className="relative list-none pl-0 sm:pl-14"
            >
              <span
                aria-hidden="true"
                className="border-foreground/15 bg-background absolute left-[18px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 sm:block"
              />
              {card}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <section className="flex flex-col gap-5">
      <div className="border-foreground/8 flex flex-col gap-1.5 border-b pb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          Technical delivery
        </p>
        <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
          Development &amp; client projects
        </h3>
        <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55 sm:text-[15px]">
          Technical delivery through WebRunner Agency and shipped client
          platforms.
        </p>
      </div>

      <div
        className={`border-foreground/8 relative overflow-hidden rounded-4xl border bg-foreground/2 p-3 sm:p-5 dark:bg-foreground/4 ${
          open ? "pb-3 sm:pb-5" : "pb-0"
        }`}
      >
        {open ? (
          animate ? (
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
          )
        ) : (
          <>
            <motion.div
              className="relative"
              initial={false}
              animate={{ height: collapsedHeight }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ overflow: "hidden" }}
            >
              <ul className="flex flex-col gap-3">
                {ENTRIES.map((entry) => (
                  <li key={`${entry.company}-${entry.period}`} className="list-none">
                    <ExperienceCard entry={entry} />
                  </li>
                ))}
              </ul>
            </motion.div>

            <AnimatePresence>
              <motion.div
                key="fade"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0"
                style={{
                  height: ROW_HEIGHT,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 80%)",
                }}
              />
            </AnimatePresence>
          </>
        )}

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-transparent text-[14px] font-medium tracking-tight transition-colors hover:bg-foreground/5 ${
              open
                ? "relative mt-4 py-3"
                : "absolute inset-x-3 bottom-3 z-10 py-3 sm:inset-x-5 sm:bottom-4"
            }`}
          >
            <Briefcase className="h-4 w-4 text-foreground/50" aria-hidden="true" />
            {open ? "Show less" : `View full experience (${ENTRIES.length} roles)`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </section>
  );
}
