/** Isotipo cítrico — La Rodaja */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 40C4 20 18 4 40 4s36 16 36 36H4z"
        fill="#F5A623"
      />
      <path d="M40 8C24 8 10 20 8 36h8c2-12 12-22 24-22V8z" fill="#A8D600" />
      <path d="M40 14v22c8 0 15-6 17-14H40V14z" fill="#FFD84D" />
      <path d="M40 14h17c-2-8-9-14-17-14v14z" fill="#FFB347" />
      <path d="M57 22c-2 8-9 14-17 14V14c6 0 11 4 13 10l4-2z" fill="#FF8C42" />
      <path d="M61 28c-4 6-11 10-21 10V22c8 0 14 4 17 10l4-4z" fill="#E85D4C" />
      <line x1="40" y1="14" x2="40" y2="40" stroke="white" strokeWidth="1.2" opacity="0.9" />
      <line x1="28" y1="18" x2="36" y2="38" stroke="white" strokeWidth="1" opacity="0.7" />
      <line x1="52" y1="18" x2="44" y2="38" stroke="white" strokeWidth="1" opacity="0.7" />
      <line x1="18" y1="28" x2="34" y2="38" stroke="white" strokeWidth="1" opacity="0.7" />
      <line x1="62" y1="28" x2="46" y2="38" stroke="white" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
