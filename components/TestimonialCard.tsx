type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
      <p className="text-sm text-foreground/80">"{quote}"</p>
      <div className="mt-6 text-sm font-semibold">{name}</div>
      <div className="text-xs text-muted-foreground">
        {role}, {company}
      </div>
    </div>
  );
}
