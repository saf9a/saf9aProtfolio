import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
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
    <Section>
      <SectionHeading
        as="h1"
        overline="Confidentialite"
        title="Politique de confidentialite"
        description="Nous respectons votre vie privee et limitons au maximum la collecte de donnees."
      />
      <div className="mt-8 space-y-6 text-sm text-muted-foreground">
        <p>
          Nous collectons uniquement les informations que vous choisissez de partager via le formulaire
          de contact, le formulaire de reservation ou par email direct. Nous utilisons ces informations
          pour repondre a votre demande et preparer une estimation ou une proposition de projet.
        </p>
        <p>
          Nous ne vendons ni ne louons vos donnees. Nous pouvons conserver les echanges pour reference
          interne et pour des besoins de conformite.
        </p>
        <p>
          Si vous avez des questions sur vos donnees ou si vous souhaitez leur suppression, contactez-nous a{" "}
          <a href={`mailto:${siteFr.email}`} className="text-accent">
            {siteFr.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
