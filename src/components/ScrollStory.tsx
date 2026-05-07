"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { SiteContent } from "@/content/site";
import { getMessages, type Locale } from "@/lib/i18n";

type ScrollStoryProps = {
  site: SiteContent;
  locale?: Locale;
};

function StepVisual({
  index,
  labels,
}: {
  index: number;
  labels: ReturnType<typeof getMessages>["scrollStory"];
}) {
  const visuals = [
    // 01 — Strategy
    <div key="strategy" className="relative flex h-full items-center justify-center">
      <div className="w-64 space-y-3 rounded-xl border border-border bg-surface/60 p-6 shadow-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <div className="h-2 w-28 rounded-full bg-foreground/10 dark:bg-white/20" />
        </div>
        {[80, 60, 90, 50].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-foreground/8 dark:bg-white/10" style={{ width: `${w}%` }} />
        ))}
        <div className="mt-4 flex gap-2">
          <div className="h-7 flex-1 rounded-lg bg-accent/25" />
          <div className="h-7 flex-1 rounded-lg bg-foreground/8 dark:bg-white/10" />
        </div>
      </div>
    </div>,

    // 02 — Product
    <div key="product" className="relative flex h-full items-center justify-center">
      <div className="relative">
        <div className="absolute -right-6 -top-6 h-48 w-64 rounded-xl border border-border/60 bg-surface/30 dark:border-white/8 dark:bg-white/[0.04]" />
        <div className="absolute -right-3 -top-3 h-48 w-64 rounded-xl border border-border/80 bg-surface/50 dark:border-white/10 dark:bg-white/[0.06]" />
        <div className="relative h-48 w-64 rounded-xl border border-accent/25 bg-surface/80 p-4 shadow-soft dark:bg-white/[0.07]">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15 dark:bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15 dark:bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-foreground/12 dark:bg-white/15" />
            <div className="h-2 w-1/2 rounded-full bg-foreground/8 dark:bg-white/10" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="h-14 rounded-lg bg-accent/15" />
            <div className="h-14 rounded-lg bg-foreground/6 dark:bg-white/8" />
          </div>
        </div>
      </div>
    </div>,

    // 03 — Cloud
    <div key="cloud" className="relative flex h-full items-center justify-center">
      <div className="w-64 space-y-2">
        {[labels.build, labels.test, labels.deploy, labels.monitor].map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
              {i + 1}
            </div>
            <div className="flex flex-1 items-center justify-between rounded-lg border border-border bg-surface/70 px-3 py-2 dark:border-white/8 dark:bg-white/[0.05]">
              <span className="text-xs text-muted-foreground dark:text-white/60">{label}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
            </div>
          </div>
        ))}
        <div className="mt-2 rounded-lg border border-success/25 bg-success/10 px-3 py-2 text-center text-xs font-semibold text-success">
          {labels.productionLive}
        </div>
      </div>
    </div>,

    // 04 — AI
    <div key="ai" className="relative flex h-full items-center justify-center">
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" aria-hidden>
        {[40, 80, 120, 160].map((y) => (
          <circle key={y} cx="30" cy={y} r="8" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
        ))}
        {[50, 90, 130].map((y) => (
          <circle key={y} cx="110" cy={y} r="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.5" />
        ))}
        {[70, 110].map((y) => (
          <circle key={y} cx="190" cy={y} r="8" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.7)" strokeWidth="1.5" />
        ))}
        {[40, 80, 120, 160].flatMap((y1) =>
          [50, 90, 130].map((y2) => (
            <line key={`${y1}-${y2}`} x1="38" y1={y1} x2="100" y2={y2} stroke="rgba(34,211,238,0.12)" strokeWidth="1" />
          )),
        )}
        {[50, 90, 130].flatMap((y1) =>
          [70, 110].map((y2) => (
            <line key={`${y1}-${y2}`} x1="120" y1={y1} x2="182" y2={y2} stroke="rgba(34,211,238,0.22)" strokeWidth="1" />
          )),
        )}
      </svg>
    </div>,
  ];

  return visuals[index] ?? null;
}

export function ScrollStory({ site, locale = "en" }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const steps = site.processSteps;
  const panelCount = steps.length;
  const messages = getMessages(locale);
  const copy = messages.scrollStory;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", prefersReducedMotion ? "0vw" : `${-(panelCount - 1) * 100}vw`],
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${panelCount * 100}vh` }}
      aria-label={copy.overline}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${panelCount * 100}vw` }}
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden bg-background dark:bg-surface-strong"
            >
              {/* Grid overlay */}
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] dark:opacity-[0.09]" />

              {/* Accent glow */}
              <div
                className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/6 blur-3xl dark:bg-accent/8"
                aria-hidden
              />

              {/* Large decorative step number */}
              <span
                className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none font-display text-[20vw] font-bold leading-none text-foreground/[0.03] dark:text-white/[0.04]"
                aria-hidden
              >
                0{i + 1}
              </span>

              <div className="container relative">
                <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1fr_1fr]">
                  {/* Text */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      {copy.overline} — 0{i + 1} {copy.of} 0{panelCount}
                    </p>
                    <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-foreground dark:text-white md:text-5xl lg:text-6xl">
                      {step.title}
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground md:text-lg dark:text-white/75">
                      {step.description}
                    </p>

                    {/* Progress dots */}
                    <div className="mt-10 flex gap-2.5">
                      {steps.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            dotIdx === i
                              ? "w-8 bg-accent"
                              : "w-1.5 bg-foreground/15 dark:bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="hidden h-72 lg:block">
                    <StepVisual index={i} labels={copy} />
                  </div>
                </div>
              </div>

              {/* Panel separator */}
              {i < panelCount - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-border to-transparent dark:via-white/8" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-8 right-12 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground dark:text-white/65 lg:flex">
          <span>{messages.common.scroll}</span>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" aria-hidden>
            <path d="M0 5h24M20 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
