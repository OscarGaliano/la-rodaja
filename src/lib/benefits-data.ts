import { Clock, ShieldCheck, Truck, Zap } from "lucide-react";

export const BENEFITS = [
  {
    icon: Clock,
    label: "Ahorro de tiempo",
    desc: "Fruta lista para servir. Sin cortes, sin residuos, sin esperas en cocina.",
  },
  {
    icon: Zap,
    label: "Reducción de mermas",
    desc: "Envasado al vacío. Pagas solo lo que consumes, sin desperdicio.",
  },
  {
    icon: ShieldCheck,
    label: "Presentación uniforme",
    desc: "Cada rodaja calibrada. Imagen impecable en cada servicio.",
  },
  {
    icon: Truck,
    label: "Entrega rápida en Costa del Sol",
    desc: "Reparto refrigerado en 24–48 h en todo el litoral malagueño.",
  },
] as const;
