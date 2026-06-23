import Image from "next/image";
import { brand } from "@/lib/brand";
import { IMAGE_QUALITY } from "@/lib/images";
import { PAGE_CONTAINER } from "@/lib/layout";
import { SECTORS } from "@/lib/site-content";

export function Sectors() {
  return (
    <section id="sectores" className="py-24 md:py-32" style={{ background: brand.cream }}>
      <div className={PAGE_CONTAINER}>
        <div className="mb-16 max-w-xl">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: brand.lime }}
          >
            Sectores
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-4xl">
            Trabajamos con los mejores.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
            Hoteles, restauración, eventos y distribución Horeca en la Costa del Sol.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {SECTORS.map((sector) => {
            const featured = "featured" in sector && sector.featured;

            return (
              <article
                key={sector.name}
                className={`group relative overflow-hidden rounded-2xl ${
                  featured ? "md:col-span-2 lg:col-span-3" : "lg:col-span-3"
                }`}
                style={{ aspectRatio: featured ? "16/9" : "16/10" }}
              >
                <Image
                  src={sector.img}
                  alt={sector.name}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={
                    featured
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.2) 55%, rgba(17,17,17,0.05) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                    {sector.name}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/65">
                    {sector.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
