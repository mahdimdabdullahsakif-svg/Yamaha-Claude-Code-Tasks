export const typography = {
  fontFamily: {
    base: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export type TypographyToken = typeof typography;
