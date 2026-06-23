"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedLogo } from "@/components/brand/AnimatedLogo";
import { LOGO_SRC } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  variant?: "header" | "hero" | "footer" | "full";
  className?: string;
  linked?: boolean;
  priority?: boolean;
  scrolled?: boolean;
};

export function BrandLockup({
  variant = "header",
  className,
  linked = true,
  priority = false,
  scrolled = false,
}: BrandLockupProps) {
  if (variant === "header") {
    return (
      <AnimatedLogo
        size="header"
        linked={linked}
        priority={priority}
        scrolled={scrolled}
        className={className}
      />
    );
  }

  if (variant === "hero") {
    return (
      <AnimatedLogo
        size="hero"
        linked={linked}
        priority={priority}
        className={className}
      />
    );
  }

  if (variant === "full" || variant === "footer") {
    const image = (
      <Image
        src={LOGO_SRC}
        alt="La Rodaja — Fresco y listo para servir"
        width={320}
        height={220}
        priority={priority}
        className={cn(
          "h-auto object-contain",
          variant === "footer" ? "w-[200px]" : "w-[min(80vw,320px)]",
          className,
        )}
      />
    );

    if (!linked) return image;

    return (
      <Link href="/" className="inline-flex transition-opacity hover:opacity-90">
        {image}
      </Link>
    );
  }

  return null;
}
