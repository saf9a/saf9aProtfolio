import type { ProcessStep } from "@/content/site";

type ProcessStepsProps = {
  steps: readonly ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl"
        >
          <p className="text-sm font-semibold text-accent">0{index + 1}</p>
          <h3 className="mt-4 text-lg font-semibold leading-snug">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
