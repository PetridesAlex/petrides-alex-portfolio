"use client";

import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Entry = {
  id: string;
  school: string;
  degree: string;
  period: string;
  details?: string[];
};

const ENTRIES: Entry[] = [
  {
    id: "pascal",
    school: "Pascal English School",
    degree: "Apolyterion (High School Diploma)",
    period: "2019 – 2020",
    details: [
      "Final grade: 17/20",
      "Main subjects: Economics, Computer Science, Biology, English",
    ],
  },
  {
    id: "computer-studies",
    school: "Computer Studies",
    degree: "ECDL · Python Institute · Web Fundamentals",
    period: "2020 – 2021",
    details: [
      "ECDL certification (all modules)",
      "Python Institute certification",
      "HTML, CSS, and programming fundamentals",
    ],
  },
  {
    id: "amsib",
    school: "AMSIB University",
    degree: "Business Studies",
    period: "2014 – 2017",
    details: ["Two years of business studies and academic foundation"],
  },
  {
    id: "self-taught",
    school: "Continuous Development",
    degree: "Web Development · React · Next.js · TypeScript",
    period: "2022 – Present",
    details: [
      "Self-directed learning in modern frontend and full-stack development",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

function EducationCard({ entry }: { entry: Entry }): ReactNode {
  return (
    <div className="border-foreground/8 hover:border-foreground/15 group relative overflow-hidden rounded-3xl border bg-background p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="flex items-start gap-4">
        <span className="border-foreground/10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-foreground/3">
          <GraduationCap
            className="h-4.5 w-4.5 text-foreground/75"
            aria-hidden="true"
          />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-[16px] font-semibold tracking-tight text-foreground sm:text-[17px]">
              {entry.school}
            </h4>
            <span className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/45">
              {entry.period}
            </span>
          </div>
          <p className="text-[14px] font-medium tracking-tight text-foreground/70">
            {entry.degree}
          </p>
          {entry.details ? (
            <ul className="mt-1 flex flex-col gap-1.5">
              {entry.details.map((detail) => (
                <li
                  key={detail}
                  className="text-[13px] leading-relaxed tracking-tight text-foreground/55"
                >
                  {detail}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Education({ forPrint = false }: { forPrint?: boolean }): ReactNode {
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
          Qualifications
        </p>
        <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
          Education
        </h3>
        <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55 sm:text-[15px]">
          Academic foundation in business and computer science, plus ongoing
          development in modern web technologies.
        </p>
      </div>

      {animate ? (
        <motion.ul
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={listVariants}
        >
          {ENTRIES.map((entry) => (
            <motion.li key={entry.id} variants={itemVariants} className="list-none">
              <EducationCard entry={entry} />
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <ul className="flex flex-col gap-3">
          {ENTRIES.map((entry) => (
            <li
              key={entry.id}
              className={forPrint ? "print-block-item list-none" : "list-none"}
            >
              <EducationCard entry={entry} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
