import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { HomeExperience } from "@/components/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages } from "@/lib/i18n";

const locale = "fr" as const;
const messages = getMessages(locale);

export const metadata: Metadata = buildPageMetadata({
  title: messages.pages.home.metadata.title,
  description: siteFr.description,
  path: "/fr",
  locale,
  keywords: messages.pages.home.metadata.keywords,
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
