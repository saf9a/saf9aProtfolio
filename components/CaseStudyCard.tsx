import Link from "next/link";

type CaseStudyCardProps = {
  title: string;
  summary: string;
  industry: string;
  metrics: string[];
};

export function CaseStudyCard({ title, summary, industry, metrics }: CaseStudyCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{industry}</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-foreground/80">
        {metrics.map((metric) => (
          <li key={metric} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/work"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        View full case study
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
