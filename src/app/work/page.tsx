import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CaseStudyVisual } from "@/components/CaseStudyVisual";
import { UnifiedCta } from "@/components/UnifiedCta";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies in Web Development, DevOps & AI Automation",
  description:
    "See how Saf9a delivers web development, DevOps, and AI automation projects with measurable business results.",
  path: "/work",
  keywords: ["web development case studies", "DevOps case studies", "AI automation projects", "Saf9a work"],
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        variant="work"
        overline="Case studies"
        title="Proof that the system ships."
        description={site.workIntro}
        primaryLabel={site.booking.primaryCta}
        primaryHref="/book"
        secondaryLabel="View services"
        secondaryHref="/services"
      />
      {site.caseStudies.map((study, index) => (
        <Section key={study.slug} className="pt-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  {study.industry}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">{study.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{study.summary}</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl">
                  <p className="text-sm font-semibold">Problem</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{study.problem}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl">
                  <p className="text-sm font-semibold">Solution</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {study.solution.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-surface/75 p-5 shadow-soft backdrop-blur-xl">
                  <p className="text-sm font-semibold">Results</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {study.results.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface/75 p-4 shadow-soft backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Timeline
                  </p>
                  <p className="mt-2 text-sm font-semibold">{study.timeline}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface/75 p-4 shadow-soft backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Tech stack
                  </p>
                  <p className="mt-2 text-sm font-semibold">{study.stack.join(", ")}</p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface/75 p-4 shadow-soft backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Impact</p>
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
            <div className={index % 2 === 1 ? "lg:order-first" : ""}>
              <CaseStudyVisual metrics={study.metrics} stack={study.stack} />
            </div>
          </div>
        </Section>
      ))}
      <Section className="pt-8">
        <UnifiedCta
          headline="Want to build something similar?"
          description="Tell us about your project and we will suggest the best approach."
          primaryLabel={site.booking.primaryCta}
          primaryHref="/book"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
