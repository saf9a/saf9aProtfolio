import type { Metadata } from "next";
import { site } from "@/content/site";
import { HomeExperience } from "@/components/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages } from "@/lib/i18n";

const locale = "en" as const;
const messages = getMessages(locale);

export const metadata: Metadata = buildPageMetadata({
  title: messages.pages.home.metadata.title,
  description: site.description,
  path: "/",
  keywords: messages.pages.home.metadata.keywords,
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <HomeExperience site={site} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
