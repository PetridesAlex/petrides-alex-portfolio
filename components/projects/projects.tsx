import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Layers,
  Plane,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  category: string;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "honeywell-travel",
    icon: Plane,
    category: "Travel Agency",
    iconLabel: "Honeywell Travel",
    title: "A full travel presence built to earn trust and drive bookings.",
    description:
      "Designed and developed the complete digital presence for Honeywell Travel — curated holiday packages, inquiry-led booking flows, and content that positions the brand as a premium Cyprus travel partner.",
    meta: "Design & Development · 2026",
    imageRatio: 1536 / 1024,
    image: "/projects/cover-honeywell-travel.webp",
    imageAlt: "Honeywell Travel website cover",
    href: "https://www.honeywelltravel.com.cy/",
  },
  {
    id: "united-properties",
    icon: Building2,
    category: "Real Estate",
    iconLabel: "United Properties",
    title: "Premium listings with map-led discovery and polished detail pages.",
    description:
      "Built a refined property platform for United Properties — structured search, map-led discovery, and detail pages engineered to capture serious buyer and renter leads.",
    meta: "Design & Development · 2026",
    imageRatio: 1536 / 1024,
    image: "/projects/cover-united-properties.webp",
    imageAlt: "United Properties website cover",
    href: "https://unitedproperties.eu/",
  },
  {
    id: "kaja-management",
    icon: Briefcase,
    category: "Business & Management",
    iconLabel: "Kaja Management",
    title: "An authority-driven site for a management consultancy.",
    description:
      "Crafted a clean, credible web presence for Kaja Management — structured service positioning, professional tone, and a brand identity built to attract high-value clients.",
    meta: "Design & Development · 2026",
    imageRatio: 1536 / 1024,
    image: "/projects/kajamanagement-cover.webp",
    imageAlt: "Kaja Management website cover",
    href: "https://kajamanagement.eu/",
  },
  {
    id: "komodromos-group",
    icon: Layers,
    category: "Corporate Group",
    iconLabel: "Komodromos Group",
    title: "A corporate hub for a diversified Cyprus conglomerate.",
    description:
      "Designed the digital home for Komodromos Group — a multi-company structure spanning property, events, storage, and technical services, presented under one trusted brand.",
    meta: "Design & Development · 2026",
    imageRatio: 1536 / 1024,
    image: "/projects/komodromos-group-cover.webp",
    imageAlt: "Komodromos Group website cover",
    href: "https://www.komodromosgroup.com/en/",
  },
  {
    id: "travel-hub-crm",
    icon: Bot,
    category: "SaaS CRM Platform",
    iconLabel: "Travel-Hub CRM",
    title: "A SaaS workspace for modern travel agencies.",
    description:
      "Built a multi-agency CRM platform with unified leads, bookings, AI-assisted proposals, and team alerts — a polished product experience from dashboard to detail view.",
    meta: "Product Design & Development · 2026",
    imageRatio: 1536 / 1024,
    image: "/projects/travel-hub-crm-cover.webp",
    imageAlt: "Travel-Hub CRM platform cover",
    href: "https://travel-hub-crm.vercel.app",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
  embedded?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
  embedded = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  const content = (
    <>
      {withHeadline ? (
        <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-foreground/45">
            Selected work
          </p>
          <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
            Brands I&rsquo;ve helped grow
          </h2>
          <p className="max-w-[38ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            SaaS platforms, corporate websites, and AI-powered systems —
            shipped end to end from design to deployment.
          </p>
        </FadeIn>
      ) : null}

      <div className="columns-1 gap-6 md:columns-2 md:gap-7">
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {viewMoreVisible ? (
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/projects"
            className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            View all projects
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      ) : null}
    </>
  );

  if (embedded) {
    return <div className="relative w-full">{content}</div>;
  }

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">{content}</div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const card = (
    <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
      <header className="flex items-center justify-between gap-2.5 px-1 pt-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </div>
        <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/40">
          {project.category}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
        style={{ aspectRatio: project.imageRatio }}
      >
        <div className="project-card__image-inner">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority={index < 2}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
        {project.meta}
      </p>
    </article>
  );

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </FadeIn>
  );
}
