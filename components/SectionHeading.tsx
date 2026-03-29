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
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      {overline ? (
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {overline}
        </p>
      ) : null}
      <HeadingTag className="text-3xl font-semibold text-balance md:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "text-muted-foreground",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
