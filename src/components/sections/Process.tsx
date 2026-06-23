import { brand } from "@/lib/brand";
import { PROCESS_STEPS } from "@/lib/process-data";
import { PAGE_CONTAINER } from "@/lib/layout";

export function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32" style={{ background: brand.surfaceMuted }}>
      <div className={PAGE_CONTAINER}>
        <div className="mb-20 max-w-xl">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: brand.lime }}
          >
            Proceso
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-4xl">
            De la huerta a tu cocina, en cuatro pasos.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === PROCESS_STEPS.length - 1;

            return (
              <div key={step.label} className="relative">
                {!isLast && (
                  <div className="absolute left-[22px] top-14 hidden h-px w-[calc(100%+2rem)] bg-black/8 lg:block" />
                )}
                <p className="mb-5 text-5xl font-light tracking-tight text-black/8">
                  {step.n}
                </p>
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: i % 2 === 0 ? brand.lemon : brand.lime }}
                >
                  <Icon size={20} style={{ color: brand.black }} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#111111]">
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
