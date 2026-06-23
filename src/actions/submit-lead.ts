"use server";

import type { LeadFormState } from "@/lib/leads/form-state";
import { persistLead } from "@/lib/leads/persist";
import { leadSchema } from "@/lib/validations/lead";

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const raw = {
    establishment: formData.get("establishment"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    type: formData.get("type"),
    message: formData.get("message") || undefined,
    source: "form" as const,
  };

  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: LeadFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (
        typeof field === "string" &&
        field in leadSchema.shape &&
        !errors[field as keyof typeof leadSchema.shape]
      ) {
        errors[field as keyof typeof leadSchema.shape] = issue.message;
      }
    }
    return {
      success: false,
      message: "Revisa los campos marcados.",
      errors,
    };
  }

  try {
    await persistLead(parsed.data);
    return {
      success: true,
      message:
        "¡Solicitud recibida! Te contactaremos en menos de 24 horas para coordinar tu muestra gratuita.",
    };
  } catch {
    return {
      success: false,
      message:
        "No hemos podido enviar tu solicitud. Escríbenos por WhatsApp o inténtalo de nuevo.",
    };
  }
}
