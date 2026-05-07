import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "A propos de Saf9a",
  description:
    "Decouvrez Saf9a, studio base a Tunis pour le developpement web, DevOps et l'automatisation IA avec une execution directe par les fondateurs.",
  path: "/fr/about",
  locale: "fr",
  keywords: ["a propos Saf9a", "studio logiciel Tunis", "DevOps Tunisie", "automatisation IA Tunisie"],
});

export default function AboutPageFr() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          overline="A propos"
          title="A propos de Saf9a, studio logiciel base a Tunis"
          description={siteFr.about.mission}
        />
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{siteFr.about.story}</p>
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-6 md:grid-cols-2">
          {siteFr.about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          overline="Fondateurs"
          title="Un acces direct aux personnes qui font le travail"
          description="Pas d'account manager, pas de passation. Vous travaillez avec les personnes qui construisent."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {siteFr.about.founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold">{founder.name}</h3>
              <p className="mt-1 text-sm text-accent">{founder.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{founder.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline="Pourquoi la Tunisie"
              title="Une base strategique pour livrer a l'international"
              description="Nous combinons vitesse locale et attentes de qualite internationale."
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {siteFr.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold">Stack technique principale</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Des outils modernes et scalables pour garder une livraison rapide et fiable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteFr.about.techStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
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
