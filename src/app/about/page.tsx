import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Saf9a",
  description:
    "Meet Saf9a, a Tunis, Tunisia studio offering web development, DevOps, and AI automation with direct founder-led delivery.",
  path: "/about",
  keywords: ["about Saf9a", "Tunis web development studio", "DevOps Tunisia", "AI automation Tunisia"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        overline="About"
        title="Senior builders. Small team. Clean execution."
        description={site.about.mission}
        primaryLabel={site.booking.primaryCta}
        primaryHref="/book"
        secondaryLabel="View work"
        secondaryHref="/work"
      />
      <Section className="pt-8">
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">{site.about.story}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.about.values.map((value) => (
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
          overline="Founders"
          title="Direct access to the people doing the work"
          description="No account managers, no handoffs. You work with the builders."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.about.founders.map((founder) => (
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
              overline="Why Tunisia"
              title="A strategic base for global delivery"
              description="We combine local speed with international quality expectations."
            />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {site.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift dark:bg-surface dark:text-foreground">
            <h3 className="text-lg font-semibold">Core tech stack</h3>
            <p className="mt-2 text-sm leading-6 text-background/75 dark:text-muted-foreground">
              Modern, scalable tools that keep delivery fast and reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.about.techStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-background/15 px-3 py-1 text-xs text-background/75 dark:border-border dark:text-muted-foreground"
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
