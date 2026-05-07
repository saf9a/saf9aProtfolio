import type { Metadata } from "next";
import { site } from "@/content/site";
import { HomeExperience } from "@/components/HomeExperience";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development, DevOps & AI Automation in Tunisia",
  description: site.description,
  path: "/",
  keywords: [
    "Saf9a",
    "web development Tunisia",
    "DevOps Tunisia",
    "AI automation Tunisia",
    "web development studio Tunis",
  ],
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
      <HomeExperience site={site} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
