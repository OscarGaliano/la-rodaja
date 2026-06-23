import { z } from "zod";

export const establishmentTypes = [
  "hotel",
  "beach-club",
  "restaurante",
  "cocteleria",
  "eventos",
] as const;

export const leadSchema = z.object({
  establishment: z
    .string()
    .min(2, "Indica el nombre del establecimiento")
    .max(120),
  phone: z
    .string()
    .min(9, "Introduce un teléfono válido")
    .max(20)
    .regex(/^[\d\s+()-]+$/, "Formato de teléfono no válido"),
  email: z.string().email("Introduce un email válido"),
  type: z.enum(establishmentTypes, {
    errorMap: () => ({ message: "Selecciona el tipo de establecimiento" }),
  }),
  message: z.string().max(500).optional(),
  source: z.enum(["form", "chat"]).default("form"),
});

export type LeadInput = z.infer<typeof leadSchema>;
