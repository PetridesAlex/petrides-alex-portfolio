"use client";

import { Download } from "lucide-react";
import type { ReactNode } from "react";

export function DownloadPdfButton(): ReactNode {
  const handleDownload = (): void => {
    window.open("/print", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="focus-ring no-print inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full bg-foreground px-3.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
      aria-label="Download portfolio as PDF"
    >
      <Download className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="hidden sm:inline">PDF</span>
    </button>
  );
}
