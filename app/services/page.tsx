import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
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
      <Section>
        <SectionHeading
          as="h1"
          overline="Services"
          title="Web development, DevOps, and AI automation services"
          description="Founder-led delivery from Tunis, Tunisia with clear scopes, fast timelines, and production-ready execution."
        />
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-6 lg:grid-cols-2">
          {site.offers.map((offer) => (
            <div
              key={offer.name}
              className="rounded-3xl border border-border bg-white/70 p-8 shadow-soft dark:bg-slate-900/60 dark:border-white/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{offer.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{offer.summary}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold text-accent">{offer.price}</p>
                  <p className="text-muted-foreground">{offer.timeline}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    What you get
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {offer.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Timeline
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {offer.timelineSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Ideal for: {offer.idealFor}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="rounded-3xl border border-border bg-white/70 p-8 text-center dark:bg-slate-900/60 dark:border-white/10">
          <h2 className="text-2xl font-semibold">Not sure which offer fits?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We can help you choose the right scope in a 20-minute discovery call.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/book">
              {site.booking.primaryCta}
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
