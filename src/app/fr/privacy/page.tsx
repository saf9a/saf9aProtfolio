import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { siteFr } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages } from "@/lib/i18n";

const locale = "fr" as const;
const messages = getMessages(locale);
const page = messages.pages.privacy;

export const metadata: Metadata = buildPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/fr/privacy",
  locale,
});

export default function PrivacyPageFr() {
  return (
    <>
      <PageHero
        variant="privacy"
        locale={locale}
        overline={page.hero.overline}
        title={page.hero.title}
        description={page.hero.description}
      />
      <Section className="pt-8">
        <div className="max-w-3xl rounded-lg border border-border bg-surface/75 p-6 text-sm leading-7 text-muted-foreground shadow-soft backdrop-blur-xl md:p-8">
          {page.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? undefined : "mt-5"}>
              {paragraph}
            </p>
          ))}
          <p className="mt-5">
            {page.contactPrefix}{" "}
            <a href={`mailto:${siteFr.email}`} className="font-semibold text-accent">
              {siteFr.email}
            </a>
            {page.contactSuffix}
          </p>
        </div>
      </Section>
    </>
  );
}
