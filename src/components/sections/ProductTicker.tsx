import { brand } from "@/lib/brand";
import { PAGE_CONTAINER } from "@/lib/layout";
import { TICKER_ITEMS } from "@/lib/site-content";

const ACCENT_COLORS = {
  lemon: brand.lemon,
  lime: brand.lime,
  orange: "#FF5C00",
  pink: "#FF2D6B",
} as const;

const TICKER_COPIES = 3;

export function ProductTicker() {
  const items = Array.from({ length: TICKER_COPIES }, (_, group) =>
    TICKER_ITEMS.map((item) => ({ ...item, key: `${item.label}-${group}` })),
  ).flat();

  return (
    <div className="bg-[#0D0D0D] pb-5 pt-1 sm:pb-6 sm:pt-2">
      <div className={PAGE_CONTAINER}>
        <div
          className="relative flex items-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          style={{ borderLeft: `3px solid ${brand.lemon}` }}
        >
          <div className="flex shrink-0 items-center gap-2 border-r border-white/10 bg-black/25 px-3.5 py-3 sm:gap-2.5 sm:px-5 sm:py-3.5">
            <span
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full"
              style={{ background: brand.lime }}
            />
            <span className="font-nav text-[9px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-[10px] sm:tracking-[0.2em]">
              <span className="sm:hidden">Stock</span>
              <span className="hidden sm:inline">Disponible</span>
            </span>
          </div>

          <div className="group hero-marquee-mask relative min-w-0 flex-1 overflow-hidden py-3 sm:py-3.5">
            <div className="hero-marquee flex w-max items-center gap-6 sm:gap-10">
              {items.map((item) => (
                <span
                  key={item.key}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span
                    className="h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5"
                    style={{ background: ACCENT_COLORS[item.accent] }}
                  />
                  <span
                    className="font-nav text-[10px] font-bold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]"
                    style={{ color: ACCENT_COLORS[item.accent] }}
                  >
                    {item.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
