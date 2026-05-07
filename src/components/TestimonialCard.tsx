type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div className="h-full rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl">
      <p className="text-base leading-7 text-foreground/80">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-8 h-px w-14 bg-accent/70" />
      <div className="mt-5 text-sm font-semibold">{name}</div>
      <div className="text-xs text-muted-foreground">
        {role}, {company}
      </div>
    </div>
  );
}
