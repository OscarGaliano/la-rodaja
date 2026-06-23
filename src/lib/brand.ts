/** Paleta de marca La Rodaja */
export const brand = {
  white: "#FFFFFF",
  cream: "#F4F2EC",
  surface: "#FDFCF9",
  surfaceMuted: "#EBE8E1",
  lime: "#A8D600",
  lemon: "#FFD84D",
  black: "#111111",
  gray: "#E8E5DE",
  grayMid: "#D8D4CB",
  muted: "#6B6B6B",
  mutedLight: "#9A9A96",
} as const;

export type BrandColor = (typeof brand)[keyof typeof brand];
