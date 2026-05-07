import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FAQItem } from "@/components/FAQItem";
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
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-hero" />
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {site.hero.kicker}
              </p>
              <h1 className="relative mt-5 pb-4 text-4xl font-semibold leading-tight text-balance md:text-5xl">
                {site.hero.headline}
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 h-1 w-24 rounded-full bg-accent/80"
                  aria-hidden
                />
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{site.hero.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/book">
                  {site.hero.primaryCta}
                </Button>
                <Button href="/work" variant="secondary">
                  {site.hero.secondaryCta}
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{site.hero.note}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white/70 p-8 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
                <h3 className="text-lg font-semibold">{site.hero.sideTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{site.hero.sideDescription}</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {site.hero.sidePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Trust signals
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p>Clear scopes, fixed timelines, and transparent updates.</p>
                    <p>Production deployments with handoff docs included.</p>
                    <p>Security and performance checks before go-live.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {site.trustIndicators.map((indicator, index) => (
              <Reveal key={indicator.label} delay={index * 0.05}>
                <div className="rounded-2xl border border-border bg-white/70 p-5 text-sm shadow-soft dark:bg-slate-900/60 dark:border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {indicator.label}
                  </p>
                  <p className="mt-2 text-base font-semibold">{indicator.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="services">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            overline="Services"
            title="End-to-end delivery across product, cloud, and automation"
            description="We cover the full stack so you can move fast without managing multiple vendors."
          />
          <Button href="/services" variant="ghost">
            View all services
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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

      <Section id="process" className="bg-muted/30">
        <SectionHeading
          overline="Process"
          title="A clear, fast path from idea to production"
          description="You get a predictable workflow, steady updates, and a system that is ready to grow."
        />
        <div className="mt-10">
          <ProcessSteps steps={site.processSteps} />
        </div>
      </Section>

      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            overline="Case studies"
            title="Recent work that shows the outcomes"
            description={site.workIntro}
          />
          <Button href="/work" variant="ghost">
            See all work
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {site.caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <CaseStudyCard
                title={study.title}
                summary={study.summary}
                industry={study.industry}
                metrics={study.metrics}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="bg-muted/30">
        <SectionHeading
          overline="Testimonials"
          title="Teams trust us with mission-critical work"
          description="We keep projects calm, outcomes clear, and handoffs thorough."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading
          overline="FAQ"
          title="Answers to common questions"
          description="If you have something else in mind, send us a note and we will help."
        />
        <div className="mt-10 grid gap-4">
          {site.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      <Section id="about" className="bg-muted/30">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline="About"
              title="A compact team with senior-level execution"
              description={site.about.mission}
            />
            <p className="mt-6 text-sm text-muted-foreground">{site.about.story}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {site.about.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-white/70 p-5 dark:bg-slate-900/60 dark:border-white/10"
                >
                  <h3 className="text-sm font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
            <h3 className="text-lg font-semibold">Why Tunisia is an advantage</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {site.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.about.techStack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="rounded-3xl bg-foreground px-6 py-12 text-background md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-semibold">{site.contact.headline}</h2>
              <p className="mt-4 text-sm text-background/80">{site.contact.description}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <Button href="/book">
                {site.booking.primaryCta}
              </Button>
              <Link href={"mailto:" + site.email} className="text-sm font-semibold">
                {site.email}
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
