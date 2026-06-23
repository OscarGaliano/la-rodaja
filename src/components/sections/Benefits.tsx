import { brand } from "@/lib/brand";
import { BENEFITS } from "@/lib/benefits-data";
import { PAGE_CONTAINER } from "@/lib/layout";

export function Benefits() {
  return (
    <section className="py-24 md:py-32" style={{ background: brand.cream }}>
      <div className={PAGE_CONTAINER}>
        <div className="mb-16 max-w-xl">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: brand.lime }}
          >
            Beneficios
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-4xl">
            Diseñado para la hostelería profesional.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: brand.grayMid }}
        >
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                className="group p-8 transition-colors duration-300 hover:bg-[#FDFCF9]"
                style={{ background: brand.surface }}
              >
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      i % 2 === 0 ? `${brand.lime}18` : `${brand.lemon}30`,
                  }}
                >
                  <Icon size={20} style={{ color: brand.black }} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#111111]">
                  {benefit.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
