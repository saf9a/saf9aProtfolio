import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  overline,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      {overline ? (
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {overline}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-balance md:text-4xl">{title}</h2>
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
