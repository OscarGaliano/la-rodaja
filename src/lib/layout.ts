/** Contenedor y márgenes compartidos en toda la página */
export const PAGE_GUTTER = "px-5 lg:px-10";

export const PAGE_CONTAINER = `mx-auto w-full max-w-7xl ${PAGE_GUTTER}`;

export const PAGE_CONTAINER_NARROW = `mx-auto w-full max-w-5xl ${PAGE_GUTTER}`;

/** Alinea el borde izquierdo con el de PAGE_CONTAINER en layouts full-bleed (hero) */
export const PAGE_ALIGN_LEFT =
  "pl-[max(1.25rem,calc((100vw-min(100vw,80rem))/2+1.25rem))] pr-5 lg:pl-[max(2.5rem,calc((100vw-min(100vw,80rem))/2+2.5rem))] lg:pr-10";
