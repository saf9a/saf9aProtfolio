import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { UnifiedCta } from "@/components/UnifiedCta";
import { buildPageMetadata } from "@/lib/seo";
import { getMessages, localizeHref } from "@/lib/i18n";

const locale = "en" as const;
const messages = getMessages(locale);
const page = messages.pages.services;

export const metadata: Metadata = buildPageMetadata({
  title: page.metadata.title,
  description: page.metadata.description,
  path: "/services",
  keywords: page.metadata.keywords,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
          variant="services"
          locale={locale}
          overline={page.hero.overline}
          title={page.hero.title}
          description={page.hero.description}
          primaryLabel={site.booking.primaryCta}
          primaryHref={localizeHref("/book", locale)}
          secondaryLabel={page.hero.secondaryLabel}
          secondaryHref={localizeHref("/contact", locale)}
      />
      <Section className="pt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {site.offers.map((offer, index) => (
            <div
              key={offer.name}
              className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">{offer.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{offer.summary}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-accent">{offer.price}</p>
                  <p className="text-muted-foreground">{offer.timeline}</p>
                </div>
              </div>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                    {page.offerLabels.whatYouGet}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {offer.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                    {page.offerLabels.timeline}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {offer.timelineSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-7 rounded-lg border border-border bg-background/50 p-4 text-sm leading-6 text-muted-foreground">
                {page.offerLabels.idealFor} {offer.idealFor}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <UnifiedCta
          headline={page.cta.headline}
          description={page.cta.description}
          primaryLabel={site.booking.primaryCta}
          primaryHref={localizeHref("/book", locale)}
          secondaryLabel={page.cta.secondaryLabel}
          secondaryHref={localizeHref("/contact", locale)}
        />
      </Section>
    </>
  );
}
