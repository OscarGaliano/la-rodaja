import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { IMAGE_QUALITY } from "@/lib/images";
import { PAGE_CONTAINER } from "@/lib/layout";
import { BLOG_POSTS } from "@/lib/site-content";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32" style={{ background: brand.black }}>
      <div className={PAGE_CONTAINER}>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: brand.lime }}
            >
              Blog
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
              Recursos para hostelería.
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/45">
              Artículos sobre coctelería, mise en place y tendencias en la Costa
              del Sol.
            </p>
          </div>
          <a
            href="#blog"
            className="hidden items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white md:inline-flex"
          >
            Ver todos los artículos
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div
                className="relative mb-5 overflow-hidden rounded-2xl"
                style={{ aspectRatio: "3/2", background: "#1A1A1A" }}
              >
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-85 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <span
                  className="absolute left-4 top-4 z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold"
                  style={{ background: brand.lemon, color: brand.black }}
                >
                  {post.tag}
                </span>
              </div>

              <div className="mb-3 flex items-center gap-3 text-xs text-white/40">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.read} lectura</span>
              </div>

              <h3 className="mb-2 text-[15px] font-semibold leading-snug text-white transition-opacity group-hover:opacity-75">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/40">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
