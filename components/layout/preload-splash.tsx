"use client";

import { DottedPattern } from "@/components/ui/dotted-pattern";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/metadata";

const DURATION_MS = 3000;
const EXIT_MS = 550;
const STORAGE_KEY = "alex-petrides-portfolio-preload";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PreloadSplash(): ReactNode {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const shouldShow = !sessionStorage.getItem(STORAGE_KEY);
    setVisible(shouldShow);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const duration = reducedMotion ? 600 : DURATION_MS;
    const exitLead = reducedMotion ? 120 : EXIT_MS;

    document.body.style.overflow = "hidden";

    const start = performance.now();
    let frame = 0;

    const tick = (now: number): void => {
      const elapsed = now - start;
      setProgress(Math.min(100, (elapsed / duration) * 100));

      if (elapsed < duration - exitLead) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, duration - exitLead);

    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
      document.body.style.overflow = "";
    }, duration);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [visible, reducedMotion]);

  if (!ready) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[10000] bg-background"
      />
    );
  }

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Launching Alex Petrides portfolio"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: exiting ? 0 : 1,
        y: exiting && !reducedMotion ? -14 : 0,
      }}
      transition={{ duration: reducedMotion ? 0.15 : 0.55, ease: EASE }}
    >
      <DottedPattern
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
        size={14}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-[1.75rem] border border-foreground/8 sm:inset-10"
      />

      <div className="relative flex w-full max-w-md flex-col items-center gap-8 px-8 text-center sm:gap-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: exiting ? 0 : 1, y: exiting ? -8 : 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/45"
        >
          Launching
        </motion.p>

        <div className="flex flex-col items-center gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{
              opacity: exiting ? 0 : 1,
              y: exiting ? -10 : 0,
              filter: exiting ? "blur(6px)" : "blur(0px)",
            }}
            transition={{ duration: 0.7, delay: exiting ? 0 : 0.08, ease: EASE }}
            className="font-serif text-[2.35rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[2.85rem]"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: exiting ? 0 : 1, y: exiting ? -8 : 0 }}
            transition={{ duration: 0.6, delay: exiting ? 0 : 0.18, ease: EASE }}
            className="text-[15px] uppercase tracking-[0.22em] text-foreground/55 sm:text-[16px]"
          >
            Portfolio
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ duration: 0.5, delay: exiting ? 0 : 0.28, ease: EASE }}
          className="flex w-full max-w-[220px] flex-col gap-3"
        >
          <div className="h-px w-full overflow-hidden rounded-full bg-foreground/10">
            <div
              className="h-full rounded-full bg-foreground transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-foreground/40">
            <span>Loading</span>
            <span className="tabular-nums">{Math.round(progress)}%</span>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] bg-foreground/10"
      >
        <div
          className="h-full bg-foreground transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
