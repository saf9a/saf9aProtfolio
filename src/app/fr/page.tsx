import type { Metadata } from "next";
import Link from "next/link";
import { siteFr } from "@/content/site";
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
import { localizeHref } from "@/lib/i18n";

const locale = "fr" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Developpement web, DevOps et automatisation IA en Tunisie",
  description: siteFr.description,
  path: "/fr",
  locale,
  keywords: [
    "Saf9a",
    "developpement web Tunisie",
    "DevOps Tunisie",
    "automatisation IA Tunisie",
    "studio logiciel Tunis",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteFr.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePageFr() {
  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-hero" />
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {siteFr.hero.kicker}
              </p>
              <h1 className="relative mt-5 pb-4 text-4xl font-semibold leading-tight text-balance md:text-5xl">
                {siteFr.hero.headline}
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 h-1 w-24 rounded-full bg-accent/80"
                  aria-hidden
                />
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{siteFr.hero.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={localizeHref("/book", locale)}>{siteFr.hero.primaryCta}</Button>
                <Button href={localizeHref("/work", locale)} variant="secondary">
                  {siteFr.hero.secondaryCta}
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{siteFr.hero.note}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white/70 p-8 shadow-soft dark:border-white/10 dark:bg-slate-900/60">
                <h3 className="text-lg font-semibold">{siteFr.hero.sideTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{siteFr.hero.sideDescription}</p>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {siteFr.hero.sidePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Signaux de confiance
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p>Perimetres clairs, delais fixes et mises a jour transparentes.</p>
                    <p>Deploiements production avec documentation de passation incluse.</p>
                    <p>Verification securite et performance avant mise en ligne.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteFr.trustIndicators.map((indicator, index) => (
              <Reveal key={indicator.label} delay={index * 0.05}>
                <div className="rounded-2xl border border-border bg-white/70 p-5 text-sm shadow-soft dark:border-white/10 dark:bg-slate-900/60">
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
            title="Une livraison de bout en bout sur le produit, le cloud et l'automatisation"
            description="Nous couvrons toute la stack pour que vous avanciez vite sans gerer plusieurs prestataires."
          />
          <Button href={localizeHref("/services", locale)} variant="ghost">
            Voir tous les services
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteFr.capabilities.map((service, index) => (
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
          overline="Processus"
          title="Un chemin clair et rapide de l'idee a la production"
          description="Vous obtenez un workflow previsible, des updates regulieres et un systeme pret a evoluer."
        />
        <div className="mt-10">
          <ProcessSteps steps={siteFr.processSteps} />
        </div>
      </Section>

      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            overline="Etudes de cas"
            title="Des projets recents qui montrent les resultats"
            description={siteFr.workIntro}
          />
          <Button href={localizeHref("/work", locale)} variant="ghost">
            Voir toutes les realisations
          </Button>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteFr.caseStudies.map((study, index) => (
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
          overline="Temoignages"
          title="Des equipes nous confient leur travail critique"
          description="Nous gardons les projets calmes, les objectifs clairs et les passations solides."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteFr.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading
          overline="FAQ"
          title="Reponses aux questions frequentes"
          description="Si vous avez une autre question, envoyez-nous un message et nous vous aiderons."
        />
        <div className="mt-10 grid gap-4">
          {siteFr.faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      <Section id="about" className="bg-muted/30">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline="A propos"
              title="Une equipe compacte avec une execution senior"
              description={siteFr.about.mission}
            />
            <p className="mt-6 text-sm text-muted-foreground">{siteFr.about.story}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {siteFr.about.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-white/70 p-5 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <h3 className="text-sm font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold">Pourquoi la Tunisie est un avantage</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {siteFr.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Stack principale
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteFr.about.techStack.map((tool) => (
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
              <h2 className="text-3xl font-semibold">{siteFr.contact.headline}</h2>
              <p className="mt-4 text-sm text-background/80">{siteFr.contact.description}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <Button href={localizeHref("/book", locale)}>{siteFr.booking.primaryCta}</Button>
              <Link href={`mailto:${siteFr.email}`} className="text-sm font-semibold">
                {siteFr.email}
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
