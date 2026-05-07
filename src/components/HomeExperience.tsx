import Link from "next/link";
import type { SiteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FAQItem } from "@/components/FAQItem";
import { HeroThreeScene } from "@/components/HeroThreeScene";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Reveal } from "@/components/Reveal";
import { ScrollCue } from "@/components/ScrollCue";
import { ScrollStory } from "@/components/ScrollStory";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { UnifiedCta } from "@/components/UnifiedCta";
import { getMessages, localizeHref, type Locale } from "@/lib/i18n";

type HomeExperienceProps = {
  site: SiteContent;
  locale?: Locale;
};

export function HomeExperience({ site, locale = "en" }: HomeExperienceProps) {
  const messages = getMessages(locale);
  const copy = messages.home;

  return (
    <div className="relative">
      <div className="relative z-10">
      <section id="top" className="relative overflow-hidden pb-10 pt-6 md:pb-12 md:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" aria-hidden />
        <HeroThreeScene className="pointer-events-none absolute inset-0 h-full w-full opacity-80 [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] dark:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background via-background/80 to-transparent" aria-hidden />
        <div className="container relative">
          <div className="hero-shell mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-6xl flex-col justify-center gap-6 py-6 text-center md:min-h-[calc(100svh-4.5rem)] md:gap-7 md:py-7">
            <div className="flex flex-col items-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {site.hero.kicker}
                </div>
                <h1 className="hero-title mx-auto mt-6 max-w-5xl font-semibold text-balance drop-shadow-sm">
                  {copy.heroTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="text-gradient">
                    {copy.heroTitle.split(" ").slice(2, 4).join(" ")}
                  </span>{" "}
                  {copy.heroTitle.split(" ").slice(4).join(" ")}
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  {copy.heroDescription}
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href={localizeHref("/book", locale)}>{site.hero.primaryCta}</Button>
                  <Button href={localizeHref("/work", locale)} variant="secondary">
                    {site.hero.secondaryCta}
                  </Button>
                </div>
                <div className="mx-auto mt-6 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
                  {site.trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="rounded-lg border border-border bg-surface/85 p-3.5 shadow-soft backdrop-blur-xl md:p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {indicator.label}
                      </p>
                      <p className="mt-2 text-sm leading-5 text-muted-foreground">
                        {indicator.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="hidden justify-center pb-1 lg:flex">
              <ScrollCue label={messages.common.scroll} />
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="mx-auto max-w-5xl">
              <ProductShowcase site={site} locale={locale} />
            </div>
          </Reveal>
          <div className="panel-line h-px" />
        </div>
      </section>

      <Section id="services" className="pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            overline={copy.servicesOverline}
            title={copy.servicesTitle}
            description={copy.servicesDescription}
          />
          <div className="lg:justify-self-end">
            <Button href={localizeHref("/services", locale)} variant="secondary">
              {copy.servicesCta}
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {site.capabilities.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <ServiceCard
                title={service.title}
                description={service.description}
                bullets={service.bullets}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <ScrollStory site={site} locale={locale} />

      <Section id="work" className="pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            overline={copy.workOverline}
            title={copy.workTitle}
            description={site.workIntro}
          />
          <Button href={localizeHref("/work", locale)} variant="secondary">
            {copy.workCta}
          </Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {site.caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <CaseStudyCard
                title={study.title}
                summary={study.summary}
                industry={study.industry}
                metrics={study.metrics}
                href={localizeHref("/work", locale)}
                ctaLabel={messages.caseStudyCard.cta}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            overline={copy.proofOverline}
            title={copy.proofTitle}
            description={copy.proofDescription}
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {site.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.05}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-border bg-surface/75 p-6 shadow-soft backdrop-blur-xl md:p-8">
            <SectionHeading
              overline={copy.aboutOverline}
              title={copy.aboutTitle}
              description={site.about.mission}
            />
            <p className="mt-6 text-sm leading-6 text-muted-foreground">{site.about.story}</p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {site.about.values.map((value) => (
                <div key={value.title} className="rounded-lg border border-border bg-background/50 p-4">
                  <h3 className="text-sm font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface-strong p-6 text-background shadow-lift md:p-8 dark:bg-surface dark:text-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {copy.whyTunisia}
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-background/85 dark:text-muted-foreground">
              {site.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-background/15 pt-6 dark:border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {copy.stack}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.about.techStack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-background/20 px-3 py-1 text-xs text-background/85 dark:border-border dark:text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-background/15 pt-6 dark:border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {copy.email}
              </p>
              <Link
                href={`mailto:${site.email}`}
                className="mt-3 block text-sm font-semibold text-background dark:text-foreground"
              >
                {site.email}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            overline={copy.faqOverline}
            title={copy.faqTitle}
            description={copy.faqDescription}
          />
          <div className="grid gap-3">
            {site.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" className="pt-8">
        <UnifiedCta
          headline={site.contact.headline}
          description={site.contact.description}
          primaryLabel={site.booking.primaryCta}
          primaryHref={localizeHref("/book", locale)}
          email={site.email}
        />
      </Section>
      </div>
    </div>
  );
}
