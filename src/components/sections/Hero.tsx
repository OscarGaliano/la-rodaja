import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { HeroLogo } from "@/components/brand/HeroLogo";
import { ProductTicker } from "@/components/sections/ProductTicker";
import { brand } from "@/lib/brand";
import { IMAGE_QUALITY } from "@/lib/images";
import { PAGE_ALIGN_LEFT } from "@/lib/layout";
import { HERO_IMAGE, TRUST_LOGOS } from "@/lib/site-content";

const STATS = [
  { value: "+80", label: "Clientes activos", color: brand.lemon },
  { value: "24h", label: "Entrega en Costa del Sol", color: brand.lime },
  { value: "100%", label: "Fruta de temporada", color: "#FF5C00" },
] as const;

const PRODUCT_CHIPS = [
  { label: "Limón Verna", bg: brand.lemon, text: brand.black },
  { label: "Lima Tahití", bg: brand.lime, text: "#FFFFFF" },
  { label: "Naranja Valencia", bg: "#FF5C00", text: "#FFFFFF" },
  { label: "Pomelo Rosa", bg: "#FF2D6B", text: "#FFFFFF" },
] as const;

export function Hero() {
  return (
    <>
      <section
        className="relative flex min-h-[100svh] flex-col overflow-hidden lg:flex-row"
        style={{ background: "#0D0D0D" }}
      >
        <div
          className={`relative z-10 flex min-h-0 flex-1 flex-col justify-end pb-8 pt-28 sm:justify-center sm:pb-12 sm:pt-32 lg:min-h-[100svh] lg:w-[58%] lg:shrink-0 lg:justify-center lg:pb-0 lg:pt-28 ${PAGE_ALIGN_LEFT}`}
        >
          <div className="max-w-2xl">
              <div className="mb-5 mt-2 sm:mb-7 sm:mt-3">
                <HeroLogo />
              </div>

              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/6 px-3.5 py-1.5 backdrop-blur-sm sm:mb-8 sm:px-4 sm:py-2">
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ background: brand.lime }}
                />
                <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80 sm:text-xs">
                  Costa del Sol · APPCC
                </span>
              </div>

              <h1
                className="mb-5 font-black leading-[0.9] tracking-[-0.02em] text-white sm:mb-6"
                style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
              >
                Los cítricos
                <br />
                <span style={{ color: brand.lemon }}>listos para</span>
                <br />
                <span style={{ color: "#FF5C00" }}>servir.</span>
              </h1>

              <p className="mb-8 max-w-md text-sm leading-relaxed text-white/60 sm:mb-10 sm:text-base md:text-lg">
                Rodajas frescas de limón, lima, naranja y pomelo envasadas al vacío
                para hostelería y coctelería.
              </p>

              <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row">
                <a
                  href="#muestra"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-all duration-200 hover:scale-[1.02] sm:gap-2.5 sm:px-8 sm:py-4"
                  style={{
                    background: brand.lemon,
                    boxShadow: "0 8px 30px rgba(255, 216, 77, 0.35)",
                  }}
                >
                  Solicitar muestra gratuita
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#presupuesto"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/8 sm:px-8 sm:py-4"
                >
                  Pedir presupuesto
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 border-b border-white/10 pb-8 sm:gap-4 sm:pb-12">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="mb-1 text-xl leading-none font-black sm:text-2xl md:text-3xl"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[10px] leading-tight text-white/45 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 sm:gap-4 sm:pt-8">
                {TRUST_LOGOS.map((name) => (
                  <div key={name} className="flex items-center gap-1.5">
                    <BadgeCheck size={13} style={{ color: brand.lime }} />
                    <span className="text-[10px] text-white/45 sm:text-xs">{name}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>

        <div className="relative h-[42vh] min-h-[240px] shrink-0 overflow-hidden sm:h-[44vh] lg:h-auto lg:min-h-[100svh] lg:w-[42%]">
          <Image
            src={HERO_IMAGE}
            alt="Rodajas frescas de limón, lima, naranja y pomelo"
            fill
            priority
            quality={IMAGE_QUALITY}
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.4) 45%, rgba(13,13,13,0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(135deg, #0D0D0D 0%, transparent 40%, transparent 70%, #0D0D0D 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 hidden w-24 lg:block xl:w-32"
            style={{
              background: "linear-gradient(to right, #0D0D0D, transparent)",
            }}
          />

          <div className="absolute top-6 right-4 hidden flex-col gap-2 sm:flex lg:top-8 lg:right-6">
            {PRODUCT_CHIPS.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm sm:text-xs"
                style={{ background: chip.bg, color: chip.text }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                {chip.label}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 hidden max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:flex sm:px-4 sm:py-2.5 lg:bottom-6">
            <div
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-white sm:h-6 sm:w-6 sm:text-xs"
              style={{ background: brand.lime }}
            >
              ✓
            </div>
            <span className="text-[10px] font-semibold text-[#0D0D0D] sm:text-xs">
              Envasado al vacío · APPCC certificado
            </span>
          </div>
        </div>
      </section>

      <ProductTicker />
    </>
  );
}
