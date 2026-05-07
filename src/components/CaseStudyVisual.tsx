type CaseStudyVisualProps = {
  metrics: readonly string[];
  stack: readonly string[];
  labels: {
    impact: string;
    cockpit: string;
    live: string;
  };
};

export function CaseStudyVisual({ metrics, stack, labels }: CaseStudyVisualProps) {
  return (
    <div className="rounded-lg border border-border bg-surface-strong p-4 text-background shadow-lift dark:bg-surface dark:text-foreground">
      <div className="rounded-md border border-background/10 bg-background/[0.06] p-4 dark:border-border dark:bg-background/45">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">{labels.impact}</p>
            <p className="mt-2 text-lg font-semibold">{labels.cockpit}</p>
          </div>
          <span className="rounded-full border border-background/20 px-3 py-1 text-xs font-semibold text-background/85 dark:border-border dark:text-muted-foreground">
            {labels.live}
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {metrics.map((metric) => (
            <div key={metric} className="rounded-md border border-background/10 bg-background/[0.06] p-3 dark:border-border">
              <p className="text-xs leading-5 text-background/85 dark:text-muted-foreground">
                {metric}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex h-28 items-end gap-2">
          {[52, 72, 61, 88, 75, 93, 82, 98].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-success"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-background/20 px-3 py-1 text-xs text-background/85 dark:border-border dark:text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
