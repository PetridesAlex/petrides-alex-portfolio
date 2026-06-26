"use client";

import { Download } from "lucide-react";
import { useEffect } from "react";
import type { ReactNode } from "react";

const PRINT_DELAY_MS = 3200;

export function PrintTrigger(): ReactNode {
  useEffect(() => {
    document.title = "Alex Petrides — Portfolio";

    const timer = window.setTimeout(() => {
      window.print();
    }, PRINT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="no-print fixed bottom-6 right-6 z-50 flex max-w-[280px] flex-col gap-2">
      <button
        type="button"
        onClick={() => window.print()}
        className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-opacity hover:opacity-90"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Save as PDF
      </button>
      <div className="rounded-lg border border-foreground/10 bg-background/95 px-3 py-2.5 text-[11px] leading-relaxed tracking-tight text-foreground/55 shadow-sm backdrop-blur-sm">
        <p className="font-medium text-foreground/70">Print settings</p>
        <ul className="mt-1.5 list-inside list-disc space-y-1">
          <li>
            Destination: <strong>Save as PDF</strong>
          </li>
          <li>
            Turn <strong>off</strong> Headers and footers
          </li>
          <li>
            Turn <strong>on</strong> Background graphics
          </li>
        </ul>
      </div>
    </div>
  );
}
