import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CaseStudyVisual } from "@/components/CaseStudyVisual";
import { UnifiedCta } from "@/components/UnifiedCta";
import { buildPageMetadata } from "@/lib/seo";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Etudes de cas en developpement web, DevOps et automatisation IA",
  description:
    "Decouvrez comment Saf9a livre des projets de developpement web, DevOps et automatisation IA avec des resultats business mesurables.",
  path: "/fr/work",
  locale,
  keywords: ["etudes de cas developpement web", "etudes de cas DevOps", "projets automatisation IA", "Saf9a realisations"],
});

export default function WorkPageFr() {
  return (
    <>
      <PageHero
        variant="work"
        overline="Etudes de cas"
        title="La preuve que le systeme livre."
        description={siteFr.workIntro}
        primaryLabel={siteFr.booking.primaryCta}
        primaryHref="/fr/book"
        secondaryLabel="Voir les services"
        secondaryHref="/fr/services"
      />
      {siteFr.caseStudies.map((study, index) => (
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
                  <p className="text-sm font-semibold">Probleme</p>
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
                  <p className="text-sm font-semibold">Resultats</p>
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
                    Calendrier
                  </p>
                  <p className="mt-2 text-sm font-semibold">{study.timeline}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface/75 p-4 shadow-soft backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Stack technique
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
          headline="Vous voulez construire quelque chose de similaire ?"
          description="Parlez-nous de votre projet et nous vous proposerons la meilleure approche."
          primaryLabel={siteFr.booking.primaryCta}
          primaryHref="/fr/book"
          secondaryLabel="Nous contacter"
          secondaryHref="/fr/contact"
        />
      </Section>
    </>
  );
}
