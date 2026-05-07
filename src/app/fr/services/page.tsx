import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { buildPageMetadata } from "@/lib/seo";
import { localizeHref } from "@/lib/i18n";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Services de developpement web, DevOps et automatisation IA",
  description:
    "Explorez les services Saf9a en developpement web, conseil DevOps et automatisation IA depuis Tunis, Tunisie.",
  path: "/fr/services",
  locale,
  keywords: [
    "services developpement web Tunisie",
    "conseil DevOps Tunisie",
    "services automatisation IA Tunisie",
    "studio logiciel Tunis",
  ],
});

export default function ServicesPageFr() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          overline="Services"
          title="Services de developpement web, DevOps et automatisation IA"
          description="Une livraison dirigee par les fondateurs depuis Tunis, Tunisie avec perimetres clairs, delais rapides et execution prete pour la production."
        />
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-6 lg:grid-cols-2">
          {siteFr.offers.map((offer) => (
            <div
              key={offer.name}
              className="rounded-3xl border border-border bg-white/70 p-8 shadow-soft dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{offer.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{offer.summary}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-accent">{offer.price}</p>
                  <p className="text-muted-foreground">{offer.timeline}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Ce que vous obtenez
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {offer.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Calendrier
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {offer.timelineSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Ideal pour : {offer.idealFor}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="rounded-3xl border border-border bg-white/70 p-8 text-center dark:border-white/10 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold">Vous ne savez pas quelle offre convient ?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Nous pouvons vous aider a choisir le bon perimetre pendant un appel de decouverte de 20 minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href={localizeHref("/book", locale)}>{siteFr.booking.primaryCta}</Button>
            <Button href={localizeHref("/contact", locale)} variant="secondary">
              Nous contacter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
