import { Button } from "@/components/Button";

type PageHeroProps = {
  overline: string;
  title: string;
  description: string;
  variant?: "services" | "work" | "about" | "contact" | "book" | "privacy";
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const variantGradient: Record<NonNullable<PageHeroProps["variant"]>, string> = {
  services: "from-accent/10 via-accent/4",
  work:     "from-success/9 via-success/3",
  about:    "from-accent/9 via-accent/3",
  contact:  "from-accent/8 via-success/3",
  book:     "from-accent/12 via-accent/5",
  privacy:  "from-muted/14 via-muted/5",
};

export function PageHero({
  overline,
  title,
  description,
  variant = "services",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  const gradient = variantGradient[variant];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-border/50 bg-background dark:bg-surface-strong">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18]" aria-hidden />

      {/* Radial gradient wash */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} to-transparent`}
        aria-hidden
      />

      {/* Bottom-right color blob */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/6 blur-3xl"
        aria-hidden
      />

      {/* Decorative rotating rings (top-right) */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[38%]"
        aria-hidden
      >
        <div className="h-[44rem] w-[44rem] animate-spin-slow rounded-full border border-accent/10 dark:border-accent/12" />
        <div className="absolute inset-[5rem] animate-spin-slow-r rounded-full border border-accent/13 dark:border-accent/16" />
        <div className="absolute inset-[10rem] animate-spin-slow rounded-full border border-accent/16 dark:border-accent/20" />
        {/* Glowing dot riding the outer ring */}
        <div className="absolute left-1/2 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent/60 shadow-[0_0_14px_5px] shadow-accent/25" />
      </div>

      {/* Top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />

      {/* Dark-mode only: decorative stat lines bottom-right */}
      <div
        className="pointer-events-none absolute bottom-14 right-14 hidden select-none flex-col gap-3.5 dark:flex"
        aria-hidden
      >
        {[
          { val: "< 4 wk", label: "delivery" },
          { val: "99.9%",  label: "uptime"   },
          { val: "0",      label: "handoffs"  },
        ].map(({ val, label }) => (
          <div key={label} className="flex items-center gap-3 opacity-20">
            <div className="h-px w-5 bg-accent" />
            <span className="font-mono text-xs tracking-widest text-white">{val}</span>
            <span className="text-xs text-white/50">{label}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              {overline}
            </p>
          </div>

          <h1 className="page-title mt-6 font-semibold tracking-[-0.025em] text-balance text-foreground dark:text-white">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-7 text-muted-foreground dark:text-white/55">
            {description}
          </p>

          {primaryLabel && primaryHref ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/40 to-transparent"
        aria-hidden
      />
    </section>
  );
}
