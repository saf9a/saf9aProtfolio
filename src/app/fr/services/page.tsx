import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { UnifiedCta } from "@/components/UnifiedCta";
import { buildPageMetadata } from "@/lib/seo";

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
      <PageHero
        variant="services"
        overline="Services"
        title="Produit, cloud et IA dans un seul systeme."
        description="Une livraison dirigee par les fondateurs depuis Tunis, Tunisie avec perimetres clairs, delais rapides et execution prete pour la production."
        primaryLabel={siteFr.booking.primaryCta}
        primaryHref="/fr/book"
        secondaryLabel="Nous contacter"
        secondaryHref="/fr/contact"
      />
      <Section className="pt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {siteFr.offers.map((offer, index) => (
            <div
              key={offer.name}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">{offer.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{offer.summary}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-accent">{offer.price}</p>
                  <p className="text-muted-foreground">{offer.timeline}</p>
                </div>
              </div>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                    Ce que vous obtenez
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {offer.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                    Calendrier
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {offer.timelineSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-7 rounded-lg border border-border bg-background/50 p-4 text-sm leading-6 text-muted-foreground">
                Ideal pour : {offer.idealFor}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <UnifiedCta
          headline="Vous ne savez pas quelle offre convient ?"
          description="Nous pouvons vous aider a choisir le bon perimetre pendant un appel de decouverte de 20 minutes."
          primaryLabel={siteFr.booking.primaryCta}
          primaryHref="/fr/book"
          secondaryLabel="Nous contacter"
          secondaryHref="/fr/contact"
        />
      </Section>
    </>
  );
}
