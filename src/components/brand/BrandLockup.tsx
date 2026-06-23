"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { LOGO_SRC } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  variant?: "header" | "footer" | "full";
  className?: string;
  linked?: boolean;
  priority?: boolean;
};

export function BrandLockup({
  variant = "header",
  className,
  linked = true,
  priority = false,
}: BrandLockupProps) {
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

  const lockup = (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-9 w-[4.1rem] shrink-0 drop-shadow-sm" />
      <span
        className="text-[1.15rem] font-bold italic tracking-tight"
        style={{
          background: "linear-gradient(180deg, #B8E600 0%, #5A8F00 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        La Rodaja
      </span>
    </div>
  );

  if (!linked) return lockup;

  return (
    <Link href="/" className="inline-flex transition-opacity hover:opacity-90">
      {lockup}
    </Link>
  );
}
