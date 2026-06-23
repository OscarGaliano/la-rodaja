import { Leaf, Package, Scissors, Truck } from "lucide-react";

export const PROCESS_STEPS = [
  {
    n: "01",
    icon: Leaf,
    label: "Seleccionamos",
    desc: "Cítricos de primera calidad, seleccionados en origen cada mañana.",
  },
  {
    n: "02",
    icon: Scissors,
    label: "Cortamos",
    desc: "Rodajas uniformes en instalaciones con certificación APPCC.",
  },
  {
    n: "03",
    icon: Package,
    label: "Envasamos",
    desc: "Vacío inmediato que preserva sabor, color y aroma durante días.",
  },
  {
    n: "04",
    icon: Truck,
    label: "Entregamos",
    desc: "Reparto refrigerado en toda la Costa del Sol.",
  },
] as const;
