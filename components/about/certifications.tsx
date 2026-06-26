"use client";

import { Award, Expand, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Certification = {
  id: string;
  issuer: string;
  title: string;
  subtitle: string;
  period: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "python-essentials",
    issuer: "Python Institute · SCP",
    title: "Python Essentials",
    subtitle: "PCAP: Programming Essentials in Python",
    period: "Jan 2026",
    image: "/projects/scp-cetification.png",
    imageAlt:
      "Python Institute Statement of Achievement for Python Essentials awarded to Alexandros Petrides",
    width: 3375,
    height: 2385,
  },
  {
    id: "frontend-basic",
    issuer: "BRO Academy",
    title: "Frontend Development",
    subtitle: "HTML, CSS, and modern frontend fundamentals",
    period: "Jun 2025",
    image: "/projects/bro-certification.png",
    imageAlt:
      "BRO Academy certificate for Frontend Development Basic awarded to Alexandros Petrides",
    width: 1448,
    height: 1086,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

function CertificationCard({
  certification,
  index,
  onExpand,
  animate,
}: {
  certification: Certification;
  index: number;
  onExpand: (id: string) => void;
  animate: boolean;
}): ReactNode {
  const card = (
    <article className="border-foreground/8 hover:border-foreground/15 group relative h-full overflow-hidden rounded-4xl border bg-background p-1.5 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div
        aria-hidden="true"
        className="bg-foreground/4 pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <button
        type="button"
        onClick={() => onExpand(certification.id)}
        className="focus-ring relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] text-left"
        aria-label={`View ${certification.title} certificate`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-foreground/6 bg-white">
          <Image
            src={certification.image}
            alt={certification.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-4"
            loading="lazy"
          />
          <span className="border-foreground/10 absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-background/90 text-foreground/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
            <Expand className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="text-[11px] font-medium tabular-nums tracking-[0.14em] text-foreground/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/45">
              {certification.period}
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/45">
              {certification.issuer}
            </p>
            <h4 className="font-serif text-[1.2rem] font-medium leading-snug tracking-tight text-foreground sm:text-[1.3rem]">
              {certification.title}
            </h4>
            <p className="text-[13px] leading-relaxed tracking-tight text-foreground/55 sm:text-[14px]">
              {certification.subtitle}
            </p>
          </div>
        </div>
      </button>
    </article>
  );

  if (!animate) {
    return card;
  }

  return <motion.div variants={cardVariants}>{card}</motion.div>;
}

function CertificationLightbox({
  certification,
  onClose,
}: {
  certification: Certification;
  onClose: () => void;
}): ReactNode {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${certification.title} certificate`}
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.1 : 0.3, ease: EASE }}
    >
      <button
        type="button"
        aria-label="Close certificate preview"
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-foreground/10 bg-background p-1.5 shadow-2xl"
        initial={{ opacity: 0, y: reducedMotion ? 0 : 20, scale: reducedMotion ? 1 : 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reducedMotion ? 0 : 12, scale: reducedMotion ? 1 : 0.98 }}
        transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: EASE }}
      >
        <button
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/95 text-foreground/70 backdrop-blur-sm transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.2rem] bg-white sm:aspect-[3/2]">
          <Image
            src={certification.image}
            alt={certification.imageAlt}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain p-4 sm:p-6"
            priority
          />
        </div>

        <div className="flex flex-col gap-1 border-t border-foreground/8 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/45">
              {certification.issuer}
            </p>
            <p className="font-serif text-[1.1rem] font-medium tracking-tight text-foreground">
              {certification.title}
            </p>
          </div>
          <p className="text-[13px] tracking-tight text-foreground/50">
            {certification.period}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certifications(): ReactNode {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCertification = CERTIFICATIONS.find((item) => item.id === activeId);
  const closeLightbox = useCallback(() => setActiveId(null), []);

  return (
    <section className="flex flex-col gap-5">
      <div className="border-foreground/8 flex flex-col gap-1.5 border-b pb-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/40">
          Credentials
        </p>
        <div className="flex items-start gap-3">
          <span className="border-foreground/10 mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-foreground/3">
            <Award className="h-4 w-4 text-foreground/70" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground sm:text-[1.5rem]">
              Coding certifications
            </h3>
            <p className="max-w-[52ch] text-[14px] leading-relaxed tracking-tight text-foreground/55 sm:text-[15px]">
              Verified training in Python programming and frontend development
              from accredited academies.
            </p>
          </div>
        </div>
      </div>

      {animate ? (
        <motion.div
          className="grid gap-4 md:grid-cols-2 md:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={listVariants}
        >
          {CERTIFICATIONS.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
              onExpand={setActiveId}
              animate
            />
          ))}
        </motion.div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {CERTIFICATIONS.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
              onExpand={setActiveId}
              animate={false}
            />
          ))}
        </div>
      )}

      <AnimatePresence>
        {activeCertification ? (
          <CertificationLightbox
            key={activeCertification.id}
            certification={activeCertification}
            onClose={closeLightbox}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
