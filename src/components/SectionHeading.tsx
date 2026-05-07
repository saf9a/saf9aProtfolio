import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  overline,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      {overline ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {overline}
        </p>
      ) : null}
      <HeadingTag className="max-w-4xl text-3xl font-semibold leading-tight text-balance md:text-5xl">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "text-base leading-7 text-muted-foreground md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
