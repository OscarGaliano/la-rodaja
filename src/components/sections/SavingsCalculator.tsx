"use client";

import { ArrowRight, Clock, Euro, Leaf, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { brand } from "@/lib/brand";
import { PAGE_CONTAINER } from "@/lib/layout";
import {
  BUSINESS_TYPES,
  CITRUS_LEVELS,
  calculateSavings,
  type BusinessTypeId,
  type CitrusLevelId,
} from "@/lib/calculator";

function formatEuro(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function SavingsCalculator() {
  const [business, setBusiness] = useState<BusinessTypeId>("restaurante");
  const [dailyClients, setDailyClients] = useState(180);
  const [citrus, setCitrus] = useState<CitrusLevelId>("medio");

  const result = useMemo(
    () => calculateSavings(business, dailyClients, citrus),
    [business, dailyClients, citrus],
  );

  return (
    <section
      id="calculadora"
      className="py-24 md:py-32"
      style={{ background: brand.cream }}
    >
      <div className={PAGE_CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: brand.lime }}
            >
              Calculadora
            </p>
            <h2 className="mb-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-4xl">
              ¿Cuánto tiempo puede ahorrar tu negocio?
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#6B6B6B]">
              Estima el ahorro en mano de obra y mermas al sustituir el corte
              manual de cítricos por rodajas listas para servir de La Rodaja.
            </p>
            <ul className="space-y-4">
              {[
                "Basado en datos reales de hostelería en la Costa del Sol",
                "Incluye ahorro de tiempo en mise en place y coctelería",
                "Estimación de reducción de desperdicio al vacío",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#6B6B6B]">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: brand.lime }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="overflow-hidden rounded-3xl border border-black/6 shadow-[0_24px_80px_rgba(17,17,17,0.08)]"
            style={{ background: brand.surface }}
          >
            <div
              className="border-b border-black/6 px-6 py-5 md:px-8"
              style={{ background: brand.black }}
            >
              <p className="text-sm font-medium text-white/90">
                Simulador de ahorro
              </p>
              <p className="mt-1 text-xs text-white/45">
                Ajusta los valores de tu establecimiento
              </p>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              <div>
                <label className="mb-3 block text-[13px] font-semibold text-[#111111]">
                  Tipo de negocio
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {BUSINESS_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setBusiness(type.id)}
                      className={`rounded-xl border px-3 py-3 text-left text-xs font-medium transition-all duration-200 ${
                        business === type.id
                          ? "border-[#A8D600] shadow-[0_0_0_1px_#A8D600]"
                          : "border-black/8 hover:border-black/15"
                      }`}
                      style={{
                        background:
                          business === type.id ? `${brand.lime}14` : brand.cream,
                        color: brand.black,
                      }}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <label
                    htmlFor="daily-clients"
                    className="text-[13px] font-semibold text-[#111111]"
                  >
                    Clientes diarios
                  </label>
                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold tabular-nums"
                    style={{ background: `${brand.lemon}40`, color: brand.black }}
                  >
                    {dailyClients.toLocaleString("es-ES")}
                  </span>
                </div>
                <input
                  id="daily-clients"
                  type="range"
                  min={30}
                  max={1200}
                  step={10}
                  value={dailyClients}
                  onChange={(e) => setDailyClients(Number(e.target.value))}
                  className="calc-slider w-full"
                  style={{ accentColor: brand.lime }}
                />
                <div className="mt-2 flex justify-between text-[11px] text-[#9A9A96]">
                  <span>30</span>
                  <span>1.200</span>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-[13px] font-semibold text-[#111111]">
                  Consumo de cítricos
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {CITRUS_LEVELS.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setCitrus(level.id)}
                      className={`rounded-xl border px-3 py-3 text-center transition-all duration-200 ${
                        citrus === level.id
                          ? "border-[#A8D600] shadow-[0_0_0_1px_#A8D600]"
                          : "border-black/8 hover:border-black/15"
                      }`}
                      style={{
                        background:
                          citrus === level.id ? `${brand.lime}14` : brand.cream,
                      }}
                    >
                      <p className="text-xs font-semibold text-[#111111]">
                        {level.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#9A9A96]">
                        {level.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl border border-black/6 p-6"
                style={{ background: brand.cream }}
              >
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9A9A96]">
                  Resultado estimado
                </p>

                <div className="mb-6 grid grid-cols-2 gap-4">
                  <ResultCard
                    icon={Clock}
                    label="Tiempo ahorrado"
                    value={`${result.hoursPerWeek} h`}
                    suffix="/ semana"
                    highlight
                  />
                  <ResultCard
                    icon={TrendingUp}
                    label="Al mes"
                    value={`${result.hoursPerMonth} h`}
                    suffix="liberadas"
                  />
                  <ResultCard
                    icon={Euro}
                    label="Ahorro económico"
                    value={formatEuro(result.totalSavingsMonth)}
                    suffix="/ mes"
                    highlight
                  />
                  <ResultCard
                    icon={Leaf}
                    label="Menos mermas"
                    value={`${result.wasteKgMonth} kg`}
                    suffix="evitados/mes"
                  />
                </div>

                <div className="mb-5 space-y-2">
                  <BarRow
                    label="Mano de obra"
                    value={result.laborSavingsMonth}
                    max={result.totalSavingsMonth}
                    color={brand.lime}
                  />
                  <BarRow
                    label="Reducción mermas"
                    value={result.wasteSavingsMonth}
                    max={result.totalSavingsMonth}
                    color={brand.lemon}
                  />
                </div>

                <p className="mb-5 text-[11px] leading-relaxed text-[#9A9A96]">
                  * Estimación orientativa según volumen, tipo de establecimiento y
                  consumo de cítricos. No sustituye un estudio personalizado.
                </p>

                <a
                  href="#presupuesto"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-[#111111] transition-all hover:scale-[1.01]"
                  style={{ background: brand.lemon }}
                >
                  Solicitar presupuesto con estos datos
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  suffix,
  highlight = false,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
  suffix: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl border border-black/6 p-4"
      style={{ background: highlight ? brand.surface : brand.surfaceMuted }}
    >
      <Icon size={16} className="mb-2 text-[#9A9A96]" />
      <p className="text-[11px] text-[#9A9A96]">{label}</p>
      <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-[#111111]">
        {value}
      </p>
      <p className="text-[10px] text-[#9A9A96]">{suffix}</p>
    </div>
  );
}

function BarRow({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div>
      <div className="mb-1 flex justify-between text-[11px]">
        <span className="text-[#6B6B6B]">{label}</span>
        <span className="font-medium tabular-nums text-[#111111]">
          {formatEuro(value)}
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full"
        style={{ background: brand.gray }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}
