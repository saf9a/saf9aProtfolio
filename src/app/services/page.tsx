import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { UnifiedCta } from "@/components/UnifiedCta";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development, DevOps & AI Automation Services",
  description:
    "Explore Saf9a services for web development, DevOps consulting, and AI automation from Tunis, Tunisia.",
  path: "/services",
  keywords: [
    "web development services Tunisia",
    "DevOps consulting Tunisia",
    "AI automation services Tunisia",
    "Tunis software studio",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
          variant="services"
          overline="Services"
          title="Product, cloud, and AI delivery in one system."
          description="Founder-led delivery from Tunis, Tunisia with clear scopes, fast timelines, and production-ready execution."
          primaryLabel={site.booking.primaryCta}
          primaryHref="/book"
          secondaryLabel="Talk to us"
          secondaryHref="/contact"
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
                    What you get
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
                    Timeline
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
                Ideal for: {offer.idealFor}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-8">
        <UnifiedCta
          headline="Not sure which offer fits?"
          description="We can help you choose the right scope in a 20-minute discovery call."
          primaryLabel={site.booking.primaryCta}
          primaryHref="/book"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
