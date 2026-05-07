import type { ProcessStep } from "@/content/site";

type ProcessStepsProps = {
  steps: readonly ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-6 md:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-2xl border border-border bg-white/70 p-5 dark:bg-slate-900/60 dark:border-white/10"
        >
          <p className="text-sm font-semibold text-accent">0{index + 1}</p>
          <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
