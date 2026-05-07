export function ScrollCue({ label = "Scroll" }: { label?: string }) {
  return (
    <div className="pointer-events-none flex flex-col items-center gap-3 text-muted-foreground/70">
      {/* Mouse outline */}
      <div className="relative flex h-11 w-[1.625rem] items-start justify-center rounded-full border-[1.5px] border-current pt-2.5">
        <span className="scroll-fade h-1.5 w-1.5 rounded-full bg-accent" />
      </div>

      {/* Double chevron arrows */}
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden="true"
        className="opacity-60"
      >
        <polyline
          points="2,1 7,6 12,1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
        <polyline
          points="2,7 7,12 12,7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Label */}
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em]">{label}</span>
    </div>
  );
}
