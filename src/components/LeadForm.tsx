"use client";

import { useActionState } from "react";
import { Check, Loader2 } from "lucide-react";
import { submitLead } from "@/actions/submit-lead";
import {
  leadFormInitialState,
  type LeadFormState,
} from "@/lib/leads/form-state";
import { brand } from "@/lib/brand";
import { CONTACT } from "@/lib/site-content";

const TRUST_ITEMS = [
  "Sin compromiso",
  "APPCC certificado",
  "Entrega 24–48 h",
] as const;

const TYPE_LABELS: Record<string, string> = {
  hotel: "Hotel",
  "beach-club": "Beach Club",
  restaurante: "Restaurante",
  cocteleria: "Coctelería",
  eventos: "Eventos / Catering",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export function LeadForm() {
  const [state, action, pending] = useActionState<LeadFormState, FormData>(
    submitLead,
    leadFormInitialState,
  );

  if (state.success) {
    return (
      <div
        id="presupuesto"
          className="mx-auto max-w-xl rounded-3xl p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-10"
          style={{ background: brand.surface }}
      >
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: `${brand.lime}30` }}
        >
          <Check size={24} style={{ color: brand.black }} />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-[#111111]">
          Solicitud enviada
        </h3>
        <p className="text-sm leading-relaxed text-[#6B6B6B]">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      id="presupuesto"
      action={action}
      className="mx-auto max-w-xl rounded-3xl p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:p-10"
      style={{ background: brand.surface }}
    >
      <h3 className="mb-6 text-base font-semibold text-[#111111]">
        Solicita tu muestra o presupuesto
      </h3>

      {state.message && !state.success && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
          <a
            href={CONTACT.whatsapp}
            className="ml-1 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      )}

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="establishment"
            placeholder="Nombre del establecimiento"
            required
            aria-invalid={!!state.errors?.establishment}
            className="w-full rounded-xl border border-black/8 px-4 py-3.5 text-sm transition-colors focus:border-[#A8D600] focus:outline-none"
            style={{ background: brand.cream }}
          />
          <FieldError message={state.errors?.establishment} />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono / WhatsApp"
            required
            aria-invalid={!!state.errors?.phone}
            className="w-full rounded-xl border border-black/8 px-4 py-3.5 text-sm transition-colors focus:border-[#A8D600] focus:outline-none"
            style={{ background: brand.cream }}
          />
          <FieldError message={state.errors?.phone} />
        </div>
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email de contacto"
          required
          aria-invalid={!!state.errors?.email}
          className="w-full rounded-xl border border-black/8 bg-[#F5F5F3] px-4 py-3.5 text-sm transition-colors focus:border-[#A8D600] focus:outline-none"
        />
        <FieldError message={state.errors?.email} />
      </div>

      <div className="mb-5">
        <select
          name="type"
          required
          defaultValue=""
          aria-invalid={!!state.errors?.type}
          className="w-full rounded-xl border border-black/8 bg-[#F5F5F3] px-4 py-3.5 text-sm text-[#6B6B6B] transition-colors focus:border-[#A8D600] focus:outline-none"
        >
          <option value="" disabled>
            Tipo de establecimiento
          </option>
          {Object.entries(TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FieldError message={state.errors?.type} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold transition-all duration-200 hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        style={{ background: brand.black, color: brand.white }}
      >
        {pending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar muestra gratuita"
        )}
      </button>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-1.5">
            <Check size={12} style={{ color: brand.lime }} />
            <span className="text-xs text-[#6B6B6B]">{item}</span>
          </div>
        ))}
      </div>
    </form>
  );
}
