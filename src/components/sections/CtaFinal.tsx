import { brand } from "@/lib/brand";
import { LeadForm } from "@/components/LeadForm";
import { PAGE_CONTAINER_NARROW } from "@/lib/layout";

export function CtaFinal() {
  return (
    <section
      id="muestra"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: brand.lemon }}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20"
        style={{ background: brand.lime }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-15"
        style={{ background: brand.black }}
      />

      <div className={`relative z-10 ${PAGE_CONTAINER_NARROW}`}>
        <div className="mb-14 text-center">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/50">
            Sin compromiso
          </p>
          <h2
            className="mb-5 font-semibold tracking-[-0.03em] text-[#111111]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
          >
            Solicita una muestra gratuita hoy.
          </h2>
          <p className="mx-auto max-w-md text-base text-black/55">
            Prueba la calidad de nuestros cítricos en tu establecimiento antes de
            hacer tu primer pedido.
          </p>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
