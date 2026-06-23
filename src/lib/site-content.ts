import { unsplash } from "./images";

/** Contenido estático sin dependencias de iconos — seguro para componentes cliente */
export const NAV_LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Sectores", href: "#sectores" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "#blog" },
] as const;

export const PRODUCTS = [
  {
    name: "Limón",
    badge: "Más pedido",
    desc: "Verna de primera selección. Acidez equilibrada para coctelería y mise en place.",
    img: unsplash("1589881132856-bd1a4af0ce4d", 1200, 1500),
  },
  {
    name: "Lima",
    badge: null,
    desc: "Aroma intenso y pulpa firme. Imprescindible en coctelería tropical y alta gastronomía.",
    img: unsplash("1581340752304-a781f821e8ce", 1200, 1500),
  },
  {
    name: "Naranja",
    badge: null,
    desc: "Rodajas uniformes de naranja de Valencia. Ideal para brunchs, negronis y decoración.",
    img: unsplash("1628573255381-e1b7712b5ba0", 1200, 1500),
  },
  {
    name: "Pomelo",
    badge: null,
    desc: "Pomelo rosa de temporada. Sabor sofisticado para coctelería de autor.",
    img: unsplash("1577234286642-fc512a5f8f11", 1200, 1500),
  },
  {
    name: "Mix Cocktail",
    badge: "Novedad",
    desc: "Surtido premium de los cuatro cítricos. El esencial para barmans exigentes.",
    img: unsplash("1511688878353-3a2f5be94cd7", 1200, 1500),
  },
] as const;

export const SECTORS = [
  {
    name: "Hoteles",
    desc: "Restaurante, habitaciones y banquetes con servicio sin fricciones.",
    img: unsplash("1566073771259-6a8506099945", 1600, 1000),
    featured: true,
  },
  {
    name: "Beach Clubs",
    desc: "Frescura garantizada en primera línea de playa.",
    img: unsplash("1575671352780-eb673fc31aca", 1400, 900),
  },
  {
    name: "Restaurantes",
    desc: "Mise en place listo en segundos. Más tiempo para lo que importa.",
    img: unsplash("1414235077428-338989a2e8c0", 1400, 900),
  },
  {
    name: "Coctelerías",
    desc: "Consistencia en cada servicio. El aliado de los mejores barmans.",
    img: unsplash("1574879948818-1cfda7aa5b1a", 1400, 900),
  },
  {
    name: "Eventos",
    desc: "Volumen, puntualidad y presentación de nivel para cualquier evento.",
    img: unsplash("1555244162-803834f70033", 1400, 900),
  },
  {
    name: "Distribuidores",
    desc: "Suministro estable, trazable y listo para reventa Horeca en toda la Costa del Sol.",
    img: "/images/distribuidores.png",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos Ruiz",
    role: "F&B Manager",
    company: "Hotel Puente Romano, Marbella",
    rating: 5,
    text: "Dos años con La Rodaja y ha transformado nuestra operativa de coctelería. La consistencia del producto y la puntualidad de entrega son impecables.",
  },
  {
    name: "Marta Fernández",
    role: "Directora de Operaciones",
    company: "Chiringuito Blue, Marbella",
    rating: 5,
    text: "Antes tardábamos 45 minutos al día en preparar cítricos. Ahora ese tiempo lo dedicamos al servicio. La calidad supera lo que cortábamos nosotros.",
  },
  {
    name: "Adrià Costa",
    role: "Head Bartender",
    company: "Nobu Restaurant, Marbella",
    rating: 5,
    text: "El Mix Cocktail es perfecto para nuestra carta de temporada. Cada rodaja sale perfecta y el envasado mantiene la frescura toda la semana.",
  },
] as const;

export const BLOG_POSTS = [
  {
    tag: "Coctelería",
    title: "Por qué los mejores bares de la Costa del Sol usan cítricos pre-cortados",
    excerpt:
      "Tiempo, higiene y consistencia: las tres razones que están cambiando la coctelería profesional en Marbella.",
    date: "12 Jun 2025",
    read: "4 min",
    img: unsplash("1574879948818-1cfda7aa5b1a", 1200, 760),
  },
  {
    tag: "Hostelería",
    title: "Reducción de mermas: el papel del mise en place de cítricos",
    excerpt:
      "Análisis con establecimientos de Marbella que redujeron un 34% el desperdicio alimentario.",
    date: "3 Jun 2025",
    read: "6 min",
    img: unsplash("1628573255381-e1b7712b5ba0", 1200, 760),
  },
  {
    tag: "Tendencias",
    title: "Limón, lima y pomelo lideran la carta de verano en la Costa del Sol",
    excerpt:
      "Las tendencias en gastronomía mediterránea que marcan el ritmo este verano en el litoral malagueño.",
    date: "24 May 2025",
    read: "5 min",
    img: unsplash("1577234286642-fc512a5f8f11", 1200, 760),
  },
] as const;

export const TRUST_LOGOS = [
  "Hotel Puente Romano",
  "Nobu Marbella",
  "Chiringuito Blue",
  "+80 establecimientos",
] as const;

/** Franja publicitaria del hero — productos en rotación */
export const TICKER_ITEMS = [
  { label: "Limón Verna", accent: "lemon" as const },
  { label: "Lima Tahití", accent: "lime" as const },
  { label: "Naranja Valencia", accent: "orange" as const },
  { label: "Pomelo Rosa", accent: "pink" as const },
  { label: "Mix Cocktail", accent: "lemon" as const },
  { label: "Envasado al vacío", accent: "lime" as const },
  { label: "Entrega 24 h", accent: "orange" as const },
] as const;

export const HERO_IMAGE = unsplash("1511688878353-3a2f5be94cd7", 2400, 1350);

export const CONTACT = {
  phone: "+34 600 000 000",
  phoneHref: "tel:+34600000000",
  email: "hola@larodaja.es",
  whatsapp: "https://wa.me/34600000000",
  location: "Costa del Sol, Málaga",
} as const;
