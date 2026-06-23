export const BUSINESS_TYPES = [
  { id: "hotel", label: "Hotel", factor: 1.25, prepPer100: 42 },
  { id: "beach-club", label: "Beach Club", factor: 1.55, prepPer100: 58 },
  { id: "restaurante", label: "Restaurante", factor: 1.0, prepPer100: 36 },
  { id: "cocteleria", label: "Coctelería", factor: 1.75, prepPer100: 62 },
  { id: "eventos", label: "Eventos / Catering", factor: 1.35, prepPer100: 40 },
  { id: "distribuidor", label: "Distribuidor", factor: 1.15, prepPer100: 38 },
] as const;

export const CITRUS_LEVELS = [
  { id: "bajo", label: "Bajo", multiplier: 0.75, desc: "Uso puntual" },
  { id: "medio", label: "Medio", multiplier: 1.0, desc: "Servicio habitual" },
  { id: "alto", label: "Alto", multiplier: 1.45, desc: "Alta coctelería" },
] as const;

export type BusinessTypeId = (typeof BUSINESS_TYPES)[number]["id"];
export type CitrusLevelId = (typeof CITRUS_LEVELS)[number]["id"];

const LABOR_COST_HOUR = 15.5;
const TIME_SAVED_RATIO = 0.92;
const WASTE_REDUCTION_RATIO = 0.34;

export type SavingsResult = {
  minutesPerDay: number;
  hoursPerWeek: number;
  hoursPerMonth: number;
  laborSavingsMonth: number;
  wasteKgMonth: number;
  wasteSavingsMonth: number;
  totalSavingsMonth: number;
};

export function calculateSavings(
  businessId: BusinessTypeId,
  dailyClients: number,
  citrusId: CitrusLevelId,
): SavingsResult {
  const business = BUSINESS_TYPES.find((b) => b.id === businessId)!;
  const citrus = CITRUS_LEVELS.find((c) => c.id === citrusId)!;

  const minutesPerDay =
    (dailyClients / 100) *
    business.prepPer100 *
    business.factor *
    citrus.multiplier;

  const savedMinutesPerDay = minutesPerDay * TIME_SAVED_RATIO;
  const hoursPerWeek = (savedMinutesPerDay * 7) / 60;
  const hoursPerMonth = hoursPerWeek * 4.33;
  const laborSavingsMonth = hoursPerMonth * LABOR_COST_HOUR;

  const wasteKgMonth =
    dailyClients * citrus.multiplier * business.factor * 0.018 * 30;
  const wasteSavingsMonth = wasteKgMonth * WASTE_REDUCTION_RATIO * 4.2;

  const totalSavingsMonth = laborSavingsMonth + wasteSavingsMonth;

  return {
    minutesPerDay: Math.round(savedMinutesPerDay),
    hoursPerWeek: Math.round(hoursPerWeek * 10) / 10,
    hoursPerMonth: Math.round(hoursPerMonth),
    laborSavingsMonth: Math.round(laborSavingsMonth),
    wasteKgMonth: Math.round(wasteKgMonth * 10) / 10,
    wasteSavingsMonth: Math.round(wasteSavingsMonth),
    totalSavingsMonth: Math.round(totalSavingsMonth),
  };
}
