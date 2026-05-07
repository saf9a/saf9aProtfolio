type ServiceCardProps = {
  title: string;
  description: string;
  bullets: readonly string[];
};

export function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <div className="group h-full rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lift">
      <div className="mb-6 h-px w-16 bg-gradient-to-r from-accent to-success transition group-hover:w-24" />
      <h3 className="text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-foreground/75">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
