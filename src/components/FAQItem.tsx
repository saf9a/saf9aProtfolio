"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="rounded-2xl border border-border bg-white/60 p-5 dark:bg-slate-900/60 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className="text-base font-semibold">{question}</span>
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm transition",
            open && "rotate-45"
          )}
          aria-hidden
        >
          +
        </span>
      </button>
      {open ? (
        <p id={contentId} className="mt-4 text-sm text-muted-foreground">
          {answer}
        </p>
      ) : null}
    </div>
  );
}
