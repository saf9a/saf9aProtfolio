type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
};

export function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft backdrop-blur dark:bg-slate-900/60 dark:border-white/10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-foreground/80">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
