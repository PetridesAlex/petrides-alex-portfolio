"use client";

import { useEffect, type ReactNode } from "react";

async function revealScrollContent(): Promise<void> {
  const step = 500;
  const max = document.documentElement.scrollHeight;

  for (let y = 0; y <= max; y += step) {
    window.scrollTo(0, y);
    await new Promise((resolve) => window.setTimeout(resolve, 60));
  }

  window.scrollTo(0, 0);
}

export function PrintReveal({ children }: { children: ReactNode }): ReactNode {
  useEffect(() => {
    void revealScrollContent();
  }, []);

  return children;
}
