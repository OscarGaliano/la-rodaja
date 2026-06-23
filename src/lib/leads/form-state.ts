import type { leadSchema } from "@/lib/validations/lead";

export type LeadFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof typeof leadSchema.shape, string>>;
};

export const leadFormInitialState: LeadFormState = {
  success: false,
  message: "",
};
