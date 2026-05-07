import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Saf9a site visitors, contact requests, and booking requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        variant="privacy"
        overline="Privacy"
        title="Minimal data. Clear handling."
        description="We respect your privacy and keep data collection to a minimum."
      />
      <Section className="pt-8">
        <div className="max-w-3xl rounded-lg border border-border bg-surface/75 p-6 text-sm leading-7 text-muted-foreground shadow-soft backdrop-blur-xl md:p-8">
          <p>
            We only collect information you choose to share through the contact form, booking
            request form, or by emailing us directly. We use this information to respond to your
            request and to provide project estimates or proposals.
          </p>
          <p className="mt-5">
            We do not sell or rent your data. We may store communication records for internal
            reference and compliance.
          </p>
          <p className="mt-5">
            If you have questions about your data or want it removed, contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-accent">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
