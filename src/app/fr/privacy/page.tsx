import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { siteFr } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialite",
  description: "Politique de confidentialite pour les visiteurs du site Saf9a, les demandes de contact et les demandes de reservation.",
  path: "/fr/privacy",
  locale: "fr",
});

export default function PrivacyPageFr() {
  return (
    <>
      <PageHero
        variant="privacy"
        overline="Confidentialite"
        title="Donnees minimales. Traitement clair."
        description="Nous respectons votre vie privee et limitons au maximum la collecte de donnees."
      />
      <Section className="pt-8">
        <div className="max-w-3xl rounded-lg border border-border bg-surface/75 p-6 text-sm leading-7 text-muted-foreground shadow-soft backdrop-blur-xl md:p-8">
          <p>
            Nous collectons uniquement les informations que vous choisissez de partager via le formulaire
            de contact, le formulaire de reservation ou par email direct. Nous utilisons ces informations
            pour repondre a votre demande et preparer une estimation ou une proposition de projet.
          </p>
          <p className="mt-5">
            Nous ne vendons ni ne louons vos donnees. Nous pouvons conserver les echanges pour reference
            interne et pour des besoins de conformite.
          </p>
          <p className="mt-5">
            Si vous avez des questions sur vos donnees ou si vous souhaitez leur suppression, contactez-nous a{" "}
            <a href={`mailto:${siteFr.email}`} className="font-semibold text-accent">
              {siteFr.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
