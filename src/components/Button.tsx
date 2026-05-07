import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseStyles =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-foreground text-background shadow-lift hover:-translate-y-0.5 hover:bg-foreground/90 dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90",
  secondary:
    "border border-border bg-surface/80 backdrop-blur hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface dark:hover:border-white/30",
  ghost: "text-foreground/75 hover:text-foreground hover:bg-foreground/5",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
