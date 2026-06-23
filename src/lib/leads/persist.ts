import type { LeadInput } from "@/lib/validations/lead";
import { createServiceClient } from "@/lib/supabase/server";

export async function persistLead(data: LeadInput) {
  const supabase = createServiceClient();

  if (!supabase) {
    if (process.env.NODE_ENV === "development") {
      console.info("[La Rodaja] Lead recibido (sin Supabase configurado):", data);
      return { ok: true as const, mode: "dev" as const };
    }
    throw new Error("Backend de leads no configurado");
  }

  const { error } = await supabase.from("larodaja_leads").insert({
    establishment: data.establishment,
    phone: data.phone,
    email: data.email,
    establishment_type: data.type,
    message: data.message ?? null,
    source: data.source,
  });

  if (error) throw error;

  return { ok: true as const, mode: "supabase" as const };
}
