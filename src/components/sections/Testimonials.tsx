import { Star } from "lucide-react";
import { brand } from "@/lib/brand";
import { PAGE_CONTAINER } from "@/lib/layout";
import { TESTIMONIALS } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: brand.cream }}>
      <div className={PAGE_CONTAINER}>
        <div className="mb-16 max-w-xl">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: brand.lemon }}
          >
            Testimonios
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-4xl">
            Lo que dicen nuestros clientes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-black/6 p-8 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
              style={{ background: brand.surface }}
            >
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    style={{ fill: brand.lemon, color: brand.lemon }}
                  />
                ))}
              </div>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-[#111111]">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="border-t border-black/6 pt-5">
                <cite className="not-italic">
                  <p className="text-sm font-semibold text-[#111111]">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6B6B6B]">
                    {testimonial.role}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: brand.lime }}
                  >
                    {testimonial.company}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
