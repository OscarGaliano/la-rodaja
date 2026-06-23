import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { brand } from "@/lib/brand";
import { PAGE_CONTAINER } from "@/lib/layout";
import { CONTACT } from "@/lib/site-content";

const FOOTER_PRODUCTS = ["Limón", "Lima", "Naranja", "Pomelo", "Mix Cocktail"];
const FOOTER_SECTORS = [
  "Hoteles",
  "Beach Clubs",
  "Restaurantes",
  "Coctelerías",
  "Eventos",
  "Distribuidores",
];

export function Footer() {
  return (
    <footer style={{ background: brand.black }} className="pb-10 pt-20">
      <div className={PAGE_CONTAINER}>
        <div className="mb-14 flex h-px overflow-hidden rounded-full">
          <div className="flex-1" style={{ background: brand.lemon }} />
          <div className="flex-1" style={{ background: brand.lime }} />
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-white/8 pb-14 md:grid-cols-4">
          <div>
            <div className="mb-6">
              <BrandLockup variant="footer" />
            </div>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/45">
              Cítricos frescos envasados al vacío para hostelería y coctelería
              profesional en la Costa del Sol.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/6 transition-all duration-200 hover:bg-white/12"
                >
                  <Icon size={16} className="text-white/55" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
              Productos
            </h4>
            <ul className="space-y-3">
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p}>
                  <a
                    href="#productos"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
              Sectores
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTORS.map((s) => (
                <li key={s}>
                  <a
                    href="#sectores"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
              Contacto
            </h4>
            <ul className="mb-6 space-y-4">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Phone size={14} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail size={14} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: "#25D366" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp directo
                </a>
              </li>
            </ul>
            <p className="text-xs text-white/25">{CONTACT.location}</p>
            <p className="mt-1 text-xs text-white/25">Entrega refrigerada 24–48 h</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} La Rodaja · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-6">
            {["Privacidad", "Aviso legal", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 transition-colors hover:text-white/55"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
