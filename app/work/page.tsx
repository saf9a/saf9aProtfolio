import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: `Work | ${site.name}`,
  description: site.workIntro,
};

export default function WorkPage() {
  return (
    <>
      <Section>
        <SectionHeading
          overline="Case studies"
          title="Results-driven delivery"
          description={site.workIntro}
        />
      </Section>
      {site.caseStudies.map((study, index) => (
        <Section key={study.slug} className={index % 2 === 1 ? "bg-muted/30" : ""}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {study.industry}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{study.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{study.summary}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold">Problem</p>
                  <p className="mt-2 text-sm text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Solution</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.solution.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold">Results</p>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.results.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white/70 p-4 dark:bg-slate-900/60 dark:border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Timeline
                  </p>
                  <p className="mt-2 text-sm font-semibold">{study.timeline}</p>
                </div>
                <div className="rounded-2xl border border-border bg-white/70 p-4 dark:bg-slate-900/60 dark:border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Tech stack
                  </p>
                  <p className="mt-2 text-sm font-semibold">{study.stack.join(", ")}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white/70 p-4 dark:bg-slate-900/60 dark:border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Impact</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-3xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
                Screenshot placeholder
              </div>
              <div className="aspect-[4/3] rounded-3xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
                Dashboard placeholder
              </div>
            </div>
          </div>
        </Section>
      ))}
      <Section>
        <div className="rounded-3xl border border-border bg-white/70 p-8 text-center dark:bg-slate-900/60 dark:border-white/10">
          <h2 className="text-2xl font-semibold">Want to build something similar?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell us about your project and we will suggest the best approach.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href={site.calendlyUrl} target="_blank" rel="noreferrer">
              Book a call
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
