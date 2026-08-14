export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
} as const;

export const radii = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  full: "9999px",
} as const;

export const shadows = {
  none: "none",
  sm: "0 1px 2px rgba(18, 20, 23, 0.08)",
  md: "0 4px 12px rgba(18, 20, 23, 0.12)",
  lg: "0 12px 24px rgba(18, 20, 23, 0.16)",
} as const;

export type SpacingToken = typeof spacing;
export type RadiiToken = typeof radii;
export type ShadowToken = typeof shadows;
