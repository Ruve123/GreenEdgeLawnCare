export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-lime ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 3c1.5 6 1.5 12 0 24-1.5-12-1.5-18 0-24Z" />
        <path d="M9 9c3 4 4 9 3 18C8 19 7 14 9 9Z" />
        <path d="M23 9c2 5 1 10-3 18-1-9 0-14 3-18Z" />
        <path d="M3 27h26v2H3z" />
      </svg>
      GreenEdge Lawn Care
    </span>
  );
}
