export function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-45" />
      <div className="absolute inset-x-0 top-16 h-48 bg-[linear-gradient(100deg,transparent,hsl(var(--accent)/0.14),transparent_58%)] motion-safe:animate-float-slow" />
      <div className="absolute inset-x-0 bottom-24 h-40 bg-[linear-gradient(82deg,transparent,hsl(var(--success)/0.12),transparent_62%)] motion-safe:animate-float-slower" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent" />
    </div>
  );
}
