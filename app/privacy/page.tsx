import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy | ${site.name}`,
  description: "Privacy policy for site visitors and contacts.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading
        overline="Privacy"
        title="Privacy policy"
        description="We respect your privacy and keep data collection to a minimum."
      />
      <div className="mt-8 space-y-6 text-sm text-muted-foreground">
        <p>
          We only collect information you choose to share through the contact form or by
          emailing us directly. We use this information to respond to your request and to
          provide project estimates or proposals.
        </p>
        <p>
          We do not sell or rent your data. We may store communication records for internal
          reference and compliance.
        </p>
        <p>
          If you have questions about your data or want it removed, contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-accent">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
