import Link from "next/link";
import { Button } from "@/components/Button";

type UnifiedCtaProps = {
  headline: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  email?: string;
};

export function UnifiedCta({
  headline,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  email,
}: UnifiedCtaProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-foreground px-5 py-10 text-background shadow-lift md:px-10 md:py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-balance md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-background/75 md:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Button href={primaryHref} className="bg-background text-foreground hover:bg-background/90">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button href={secondaryHref} variant="secondary" className="border-background/20 bg-background/10 text-background hover:bg-background/15">
              {secondaryLabel}
            </Button>
          ) : null}
          {email ? (
            <Link href={`mailto:${email}`} className="text-sm font-semibold text-background/80 hover:text-background">
              {email}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
