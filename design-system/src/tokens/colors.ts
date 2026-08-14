export const colors = {
  brand: {
    yamahaBlue: "#0A2FA6",
    yamahaBlueDark: "#071F73",
    yamahaBlueLight: "#3D5EC7",
    racingRed: "#D0021B",
    black: "#0D0D0D",
    white: "#FFFFFF",
  },
  neutral: {
    50: "#F7F8FA",
    100: "#EDEFF3",
    200: "#DBDFE6",
    300: "#B9C0CC",
    400: "#8B93A1",
    500: "#5F6774",
    600: "#454C57",
    700: "#30353D",
    800: "#1E2126",
    900: "#121417",
  },
  semantic: {
    success: "#1E8E5A",
    warning: "#C77700",
    danger: "#D0021B",
    info: "#0A2FA6",
  },
  text: {
    primary: "#121417",
    secondary: "#5F6774",
    inverse: "#FFFFFF",
    onBrand: "#FFFFFF",
  },
  surface: {
    page: "#FFFFFF",
    raised: "#F7F8FA",
    inverse: "#121417",
    border: "#DBDFE6",
  },
} as const;

export type ColorToken = typeof colors;
