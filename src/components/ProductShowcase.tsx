"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { SiteContent } from "@/content/site";
import { getMessages, type Locale } from "@/lib/i18n";

type ProductShowcaseProps = {
  site: SiteContent;
  locale?: Locale;
};

export function ProductShowcase({ site, locale = "en" }: ProductShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.28], [0, prefersReducedMotion ? 0 : -22]);
  const rotateX = useTransform(scrollYProgress, [0, 0.28], [0, prefersReducedMotion ? 0 : 3]);

  const labels = getMessages(locale).productShowcase;

  return (
    <motion.div
      className="perspective-soft relative mx-auto w-full max-w-5xl"
      style={{ y, rotateX }}
      transition={{ type: "spring", stiffness: 80, damping: 22 }}
    >
      <div className="absolute -inset-4 rounded-[1.75rem] border border-accent/15 bg-accent/5 blur-2xl" />
      <div className="premium-surface relative overflow-hidden rounded-lg p-2.5 md:p-3">
        <div className="rounded-md border border-white/10 bg-surface-strong text-white shadow-lift">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
            </div>
            <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/80">
              {labels.live}
            </span>
          </div>
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-3 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">{labels.command}</p>
              <div className="mt-4 space-y-2.5">
                {site.capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    className="rounded-md border border-white/10 bg-white/[0.055] p-2.5"
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + index * 0.08 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate text-xs font-semibold md:text-sm">{capability.title}</p>
                      <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: "25%" }}
                        animate={{ width: `${72 + index * 8}%` }}
                        transition={{ duration: 1.1, delay: 0.2 + index * 0.08 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2.5">
                {site.trustIndicators.map((item, index) => (
                  <div
                    key={item.label}
                    className={index === 2 ? "col-span-2 rounded-md border border-white/10 bg-white/[0.055] p-3" : "rounded-md border border-white/10 bg-white/[0.055] p-3"}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-white/90 md:text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-md border border-white/10 bg-white/[0.055] p-3">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold">{labels.observability}</p>
                  <span className="text-xs text-success">99.9%</span>
                </div>
                <div className="mt-3 flex h-20 items-end gap-2">
                  {[44, 62, 52, 78, 66, 88, 74, 92, 82, 95].map((height, index) => (
                    <motion.span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent to-success"
                      initial={{ height: "18%" }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.05 * index }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs text-white/85">
                <div className="rounded-md border border-white/10 bg-white/[0.055] p-2.5">
                  {labels.review}
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.055] p-2.5">
                  {labels.timeline}
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.055] p-2.5">
                  {labels.pipeline}
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.055] p-2.5">
                  {labels.risk}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
