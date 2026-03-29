import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: site.about.mission,
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          overline="About"
          title="A studio with senior expertise"
          description={site.about.mission}
        />
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{site.about.story}</p>
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-6 md:grid-cols-2">
          {site.about.values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          overline="Founders"
          title="Direct access to the people doing the work"
          description="No account managers, no handoffs. You work with the builders."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.about.founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10"
            >
              <h3 className="text-lg font-semibold">{founder.name}</h3>
              <p className="mt-1 text-sm text-accent">{founder.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{founder.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/30">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              overline="Why Tunisia"
              title="A strategic base for global delivery"
              description="We combine local speed with international quality expectations."
            />
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {site.about.whyTunisia.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-soft dark:bg-slate-900/60 dark:border-white/10">
            <h3 className="text-lg font-semibold">Core tech stack</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Modern, scalable tools that keep delivery fast and reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
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
      </Section>
    </>
  );
}
