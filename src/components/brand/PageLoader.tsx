"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LOGO_SRC } from "@/lib/brand-assets";

type PageLoaderProps = {
  exiting: boolean;
};

export function PageLoader({ exiting }: PageLoaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#111111] transition-opacity duration-500 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Cargando La Rodaja"
    >
      <div
        className={`loader-enter relative flex flex-col items-center transition-all duration-700 ${
          mounted && !exiting ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="loader-ring absolute -inset-6 rounded-full" aria-hidden />

        <div className="loader-glow absolute inset-0 rounded-2xl" aria-hidden />

        <div className="loader-breathe relative">
          <Image
            src={LOGO_SRC}
            alt="La Rodaja"
            width={280}
            height={200}
            priority
            className="relative z-10 h-auto w-[min(72vw,280px)] object-contain"
          />
        </div>

        <div className="loader-segments mt-8 flex gap-2" aria-hidden>
          {["#A8D600", "#FFD84D", "#FFB347", "#FF8C42", "#E85D4C"].map(
            (color, i) => (
              <span
                key={color}
                className="loader-segment h-1.5 w-6 rounded-full"
                style={{
                  background: color,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden bg-white/8">
        <div className="loader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#A8D600] to-transparent" />
      </div>
    </div>
  );
}
