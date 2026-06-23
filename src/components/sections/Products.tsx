import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { IMAGE_QUALITY } from "@/lib/images";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PRODUCTS } from "@/lib/site-content";

export function Products() {
  return (
    <section
      id="productos"
      className="py-24 md:py-32"
      style={{ background: brand.black }}
    >
      <div className={PAGE_CONTAINER}>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: brand.lemon }}
            >
              Catálogo
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
              Nuestros productos.
            </h2>
          </div>
          <a
            href="#presupuesto"
            className="hidden items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white md:inline-flex"
          >
            Solicitar catálogo completo
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="scrollbar-hide -mx-5 flex gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group w-[260px] flex-none cursor-pointer md:w-auto"
            >
              <div
                className="relative mb-5 overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/5", background: "#1A1A1A" }}
              >
                <Image
                  src={product.img}
                  alt={`Rodajas de ${product.name}`}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes="(max-width: 768px) 280px, 20vw"
                  className="object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                />

                {product.badge && (
                  <span
                    className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ background: brand.lemon, color: brand.black }}
                  >
                    {product.badge}
                  </span>
                )}

                <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#presupuesto"
                    className="w-full rounded-xl py-3 text-center text-xs font-semibold text-white transition-colors"
                    style={{ background: brand.lime }}
                  >
                    Pedir presupuesto
                  </a>
                </div>
              </div>

              <h3 className="mb-1.5 text-[15px] font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-xs leading-relaxed text-white/45">
                {product.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
