import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: Locale;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  locale = "en",
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      images: [
        {
          url: "/opengraph-image",
        },
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
