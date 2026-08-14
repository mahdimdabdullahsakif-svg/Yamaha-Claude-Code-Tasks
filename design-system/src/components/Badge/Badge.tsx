import React from "react";
import { colors, radii, spacing, typography } from "../../tokens";

export type BadgeTone = "brand" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneStyles: Record<BadgeTone, React.CSSProperties> = {
  brand: {
    backgroundColor: `${colors.brand.yamahaBlue}1A`,
    color: colors.brand.yamahaBlue,
  },
  success: {
    backgroundColor: "#1E8E5A1A",
    color: colors.semantic.success,
  },
  warning: {
    backgroundColor: "#C777001A",
    color: colors.semantic.warning,
  },
  danger: {
    backgroundColor: "#D0021B1A",
    color: colors.semantic.danger,
  },
  neutral: {
    backgroundColor: colors.neutral[100],
    color: colors.neutral[600],
  },
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ tone = "neutral", style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontFamily: typography.fontFamily.base,
          fontWeight: typography.fontWeight.medium,
          fontSize: typography.fontSize.xs,
          padding: `${spacing[1]} ${spacing[2]}`,
          borderRadius: radii.full,
          ...toneStyles[tone],
          ...style,
        }}
      />
    );
  }
);

Badge.displayName = "Badge";
