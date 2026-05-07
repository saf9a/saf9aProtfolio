import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "A propos de Saf9a",
  description:
    "Decouvrez Saf9a, studio base a Tunis pour le developpement web, DevOps et automatisation IA.",
  path: "/fr/about",
  locale,
  keywords: ["a propos Saf9a", "studio developpement web Tunis", "DevOps Tunisie", "automatisation IA Tunisie"],
});

export default function AboutPageFr() {
  return (
    <>
      <PageHero
        variant="about"
        overline="A propos"
        title="Builders seniors. Petite equipe. Execution nette."
        description={siteFr.about.mission}
        primaryLabel={siteFr.booking.primaryCta}
        primaryHref="/fr/book"
        secondaryLabel="Voir les realisations"
        secondaryHref="/fr/work"
      />
      <Section className="pt-8">
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">{siteFr.about.story}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteFr.about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <SectionHeading
          overline="Fondateurs"
          title="Acces direct aux personnes qui construisent"
          description="Pas d'account managers, pas de passations inutiles. Vous travaillez avec les builders."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteFr.about.founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{founder.name}</h3>
              <p className="mt-1 text-sm text-accent">{founder.role}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{founder.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline="Pourquoi la Tunisie"
              title="Une base strategique pour livrer a l'international"
              description="Nous combinons vitesse locale et exigences de qualite internationales."
            />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {siteFr.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <h3 className="text-lg font-semibold">Stack technique principale</h3>
            <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
              Des outils modernes et scalables pour garder une livraison rapide et fiable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteFr.about.techStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-background/15 px-3 py-1 text-xs text-background/75 dark:border-border dark:text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
