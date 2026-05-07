import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  industry: string;
  metrics: readonly string[];
  href: string;
  ctaLabel: string;
};

export function CaseStudyCard({
  title,
  summary,
  industry,
  metrics,
  href,
  ctaLabel,
}: CaseStudyCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{industry}</p>
      <h3 className="mt-4 text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-foreground/80">
        {metrics.map((metric) => (
          <li key={metric} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-auto inline-flex pt-6 text-sm font-semibold text-accent transition group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
