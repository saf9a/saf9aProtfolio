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
import { localizeHref } from "@/lib/i18n";

type HomeExperienceProps = {
  site: SiteContent;
  locale?: "en" | "fr";
};

export function HomeExperience({ site, locale = "en" }: HomeExperienceProps) {
  const copy =
    locale === "fr"
      ? {
          servicesOverline: "Systeme de livraison",
          servicesTitle: "Une seule equipe pour le produit, le cloud et l'automatisation",
          servicesDescription:
            "Chaque service s'emboite dans le suivant: clarifier le produit, le livrer proprement, puis automatiser ce qui ralentit l'equipe.",
          servicesCta: "Voir les services",
          processOverline: "Methode",
          processTitle: "Un rythme calme du brief a la production",
          processDescription:
            "Le travail avance comme une sequence continue: cadrage, construction, durcissement, puis iteration sur usage reel.",
          workOverline: "Resultats",
          workTitle: "Des projets qui montrent le niveau d'execution",
          workCta: "Voir les realisations",
          proofOverline: "Confiance",
          proofTitle: "Des equipes choisissent Saf9a pour avancer sans bruit",
          proofDescription:
            "Moins de passations, des decisions plus nettes, et un produit qui tient en production.",
          faqOverline: "FAQ",
          faqTitle: "Questions avant de demarrer",
          faqDescription: "Les points pratiques avant de reserver un appel.",
          aboutOverline: "Base operationnelle",
          aboutTitle: "Une equipe compacte, senior, et proche de l'execution",
          stack: "Stack principale",
          whyTunisia: "Pourquoi Tunis",
          email: "Email direct",
          heroTitle: "Lancer plus vite. Operer plus propre. Automatiser mieux.",
          heroDescription:
            "Saf9a construit des produits web, des systemes cloud et des workflows IA pour les equipes qui veulent une execution nette, rapide et prete pour la production.",
        }
      : {
          servicesOverline: "Delivery system",
          servicesTitle: "One team across product, cloud, and automation",
          servicesDescription:
            "Each capability connects into the next: clarify the product, ship it cleanly, then automate the work slowing the team down.",
          servicesCta: "View services",
          processOverline: "Method",
          processTitle: "A calm path from brief to production",
          processDescription:
            "The work moves as one continuous sequence: scope, build, harden, then iterate from real usage.",
          workOverline: "Outcomes",
          workTitle: "Projects that show the level of execution",
          workCta: "View work",
          proofOverline: "Proof",
          proofTitle: "Teams choose Saf9a when they need progress without noise",
          proofDescription:
            "Fewer handoffs, sharper decisions, and software that holds up in production.",
          faqOverline: "FAQ",
          faqTitle: "Questions before we start",
          faqDescription: "The practical details before you book a call.",
          aboutOverline: "Operating base",
          aboutTitle: "A compact senior team close to the work",
          stack: "Core stack",
          whyTunisia: "Why Tunis",
          email: "Direct email",
          heroTitle: "Launch faster. Operate cleaner. Automate smarter.",
          heroDescription:
            "Saf9a builds web products, cloud delivery systems, and AI workflows for teams that need production-grade execution without enterprise drag.",
        };

  return (
    <div className="relative">
      <div className="relative z-10">
      <section id="top" className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" aria-hidden />
        <HeroThreeScene className="pointer-events-none absolute inset-0 h-full w-full opacity-80 [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] dark:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background via-background/80 to-transparent" aria-hidden />
        <div className="container relative">
          {/* flex-col: hero content takes flex-1 (centered), scroll cue sits at bottom */}
          <div className="mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl flex-col items-center py-8 text-center md:min-h-[calc(100svh-5rem)] md:py-10">
            <div className="flex flex-1 flex-col items-center justify-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {site.hero.kicker}
                </div>
                <h1 className="hero-title mx-auto mt-6 max-w-5xl font-semibold tracking-[-0.02em] text-balance drop-shadow-sm">
                  {copy.heroTitle.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="text-gradient">
                    {copy.heroTitle.split(" ").slice(2, 4).join(" ")}
                  </span>{" "}
                  {copy.heroTitle.split(" ").slice(4).join(" ")}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  {copy.heroDescription}
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href={localizeHref("/book", locale)}>{site.hero.primaryCta}</Button>
                  <Button href={localizeHref("/work", locale)} variant="secondary">
                    {site.hero.secondaryCta}
                  </Button>
                </div>
                <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
                  {site.trustIndicators.map((indicator) => (
                    <div key={indicator.label} className="rounded-lg border border-border bg-surface/76 p-4 shadow-soft backdrop-blur-xl">
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

            {/* Scroll cue — below the centered content, within viewport */}
            <div className="hidden pb-4 md:flex">
              <ScrollCue label={locale === "fr" ? "Défiler" : "Scroll"} />
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
            <ul className="mt-5 space-y-4 text-sm leading-6 text-background/75 dark:text-muted-foreground">
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
                    className="rounded-full border border-background/15 px-3 py-1 text-xs text-background/75 dark:border-border dark:text-muted-foreground"
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
