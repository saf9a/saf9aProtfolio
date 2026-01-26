import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: "text-lg",
  md: "text-xl md:text-2xl",
};

export function Logo({ size = "md", className }: LogoProps) {
  const name = site.name;
  const splitIndex = name.indexOf("9");

  return (
    <span
      className={cn(
        "font-display font-semibold tracking-[0.12em] leading-none",
        sizes[size],
        className
      )}
    >
      {splitIndex === -1 ? (
        name
      ) : (
        <>
          {name.slice(0, splitIndex)}
          <span className="text-accent">9</span>
          {name.slice(splitIndex + 1)}
        </>
      )}
    </span>
  );
}
