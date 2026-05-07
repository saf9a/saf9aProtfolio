import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { HomeExperience } from "@/components/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Developpement web, DevOps et automatisation IA en Tunisie",
  description: siteFr.description,
  path: "/fr",
  locale,
  keywords: [
    "Saf9a",
    "developpement web Tunisie",
    "DevOps Tunisie",
    "automatisation IA Tunisie",
    "studio logiciel Tunis",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteFr.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePageFr() {
  return (
    <>
      <HomeExperience site={siteFr} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
