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
    <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl">
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
