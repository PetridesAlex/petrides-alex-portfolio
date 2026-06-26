"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type TickerProject = {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  href: string;
};

const PROJECTS: TickerProject[] = [
  {
    id: "honeywell-travel",
    category: "Travel Agency",
    title: "Honeywell Travel",
    image: "/projects/cover-honeywell-travel.webp",
    alt: "Honeywell Travel website",
    href: "https://www.honeywelltravel.com.cy/",
  },
  {
    id: "united-properties",
    category: "Real Estate",
    title: "United Properties",
    image: "/projects/cover-united-properties.webp",
    alt: "United Properties website",
    href: "https://unitedproperties.eu/",
  },
  {
    id: "kaja-management",
    category: "Business & Management",
    title: "Kaja Management",
    image: "/projects/kajamanagement-cover.webp",
    alt: "Kaja Management website",
    href: "https://kajamanagement.eu/",
  },
  {
    id: "komodromos-group",
    category: "Corporate Group",
    title: "Komodromos Group",
    image: "/projects/komodromos-group-cover.webp",
    alt: "Komodromos Group website",
    href: "https://www.komodromosgroup.com/en/",
  },
  {
    id: "travel-hub-crm",
    category: "SaaS CRM Platform",
    title: "Travel-Hub CRM",
    image: "/projects/travel-hub-crm-cover.webp",
    alt: "Travel-Hub CRM platform",
    href: "https://travel-hub-crm.vercel.app",
  },
];

const CARD_WIDTH = 360;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
const SPEED = 0.45;

function TickerCard({ project }: { project: TickerProject }): ReactNode {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title}`}
      className="project-ticker-card group relative block shrink-0 overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
      style={{ width: CARD_WIDTH, height: 240 }}
    >
      <div className="relative h-full w-full">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          draggable={false}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-transparent transition-opacity duration-300 group-hover:from-foreground/95"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-background/70">
              {project.category}
            </span>
            <span className="truncate text-[17px] font-semibold tracking-tight text-background">
              {project.title}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="shrink-0 text-[18px] text-background/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const prefersReducedMotion = useReducedMotion();
  const pausedRef = useRef(false);
  const x = useMotionValue(0);
  const items = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const loopWidth = PROJECTS.length * STEP;

  useAnimationFrame(() => {
    if (prefersReducedMotion || pausedRef.current) return;
    let next = x.get() - SPEED;
    if (Math.abs(next) >= loopWidth) next = 0;
    x.set(next);
  });

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-[280px] w-full sm:h-[300px]"
      />
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col items-center gap-2 px-6 text-center sm:px-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
          Selected work
        </p>
        <p className="max-w-[40ch] text-[15px] leading-relaxed tracking-tight text-foreground/55">
          Client projects across travel, real estate, corporate, and SaaS.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        aria-label="Selected work carousel"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
        />

        <motion.div
          className="flex w-max items-stretch gap-6 px-6 sm:px-10"
          style={{ x: prefersReducedMotion ? 0 : x }}
        >
          {prefersReducedMotion
            ? PROJECTS.map((project) => (
                <TickerCard key={project.id} project={project} />
              ))
            : items.map((project, index) => (
                <TickerCard
                  key={`${project.id}-${index}`}
                  project={project}
                />
              ))}
        </motion.div>
      </div>
    </div>
  );
}
