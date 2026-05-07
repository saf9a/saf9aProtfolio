import type { Metadata } from "next";
import { siteFr } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages, localizeHref } from "@/lib/i18n";

const locale = "fr" as const;
const messages = getMessages(locale);
const page = messages.pages.about;

export const metadata: Metadata = buildPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/fr/about",
  locale,
  keywords: page.metadata.keywords,
});

export default function AboutPageFr() {
  return (
    <>
      <PageHero
        variant="about"
        locale={locale}
        overline={page.hero.overline}
        title={page.hero.title}
        description={siteFr.about.mission}
        primaryLabel={siteFr.booking.primaryCta}
        primaryHref={localizeHref("/book", locale)}
        secondaryLabel={page.hero.secondaryLabel}
        secondaryHref={localizeHref("/work", locale)}
      />
      <Section className="pt-8">
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">{siteFr.about.story}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteFr.about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <SectionHeading
          overline={page.founders.overline}
          title={page.founders.title}
          description={page.founders.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteFr.about.founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">{founder.name}</h3>
              <p className="mt-1 text-sm text-accent">{founder.role}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{founder.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline={page.whyTunisia.overline}
              title={page.whyTunisia.title}
              description={page.whyTunisia.description}
            />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {siteFr.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <h3 className="text-lg font-semibold">{page.techStack.title}</h3>
            <p className="mt-2 text-sm leading-6 text-background/85 dark:text-muted-foreground">
              {page.techStack.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {siteFr.about.techStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-background/20 px-3 py-1 text-xs text-background/85 dark:border-border dark:text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
