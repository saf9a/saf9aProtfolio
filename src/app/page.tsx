import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages, getSiteContent } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

export function generateMetadata(): Metadata {
  const locale = getRequestLocale();
  const site = getSiteContent(locale);
  const messages = getMessages(locale);

  return buildPageMetadata({
    title: messages.pages.home.metadata.title,
    description: site.description,
    path: "/",
    locale,
    keywords: messages.pages.home.metadata.keywords,
  });
}

export default function HomePage() {
  const locale = getRequestLocale();
  const site = getSiteContent(locale);
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
