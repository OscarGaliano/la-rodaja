import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

type AnimatedLogoProps = {
  size?: "header" | "hero";
  linked?: boolean;
  priority?: boolean;
  scrolled?: boolean;
  className?: string;
};

export function AnimatedLogo({
  size = "header",
  linked = true,
  priority = false,
  scrolled = false,
  className,
}: AnimatedLogoProps) {
  const isHero = size === "hero";

  const content = (
    <span
      className={cn(
        "logo-alive relative inline-flex items-center justify-center",
        isHero ? "logo-alive-hero" : "logo-alive-header",
        !isHero && [
          "rounded-xl bg-[#111111] px-3 py-1.5",
          scrolled
            ? "shadow-sm ring-1 ring-black/10"
            : "shadow-md ring-2 ring-white/20",
          "h-12 sm:h-[3.25rem] sm:px-3.5",
        ],
        className,
      )}
    >
      <span
        className={cn(
          "logo-alive-glow pointer-events-none absolute rounded-full",
          isHero
            ? "-inset-6 sm:-inset-8"
            : "-inset-2 sm:-inset-2.5",
        )}
        aria-hidden
      />
      <Image
        src={LOGO_SRC}
        alt="La Rodaja — Fresco y listo para servir"
        width={isHero ? 200 : 120}
        height={isHero ? 140 : 88}
        priority={priority}
        className={cn(
          "relative z-[1] object-contain object-center",
          isHero
            ? "h-auto w-[8.75rem] sm:w-[10.5rem] md:w-[11.5rem]"
            : "h-9 w-auto max-w-[6.75rem] sm:h-10 sm:max-w-[7.5rem]",
        )}
      />
    </span>
  );

  if (!linked) return content;

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 transition-opacity hover:opacity-90"
      aria-label="La Rodaja — Inicio"
    >
      {content}
    </Link>
  );
}
