import React from "react";
import { colors, radii, spacing, typography } from "../../tokens";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: typography.fontSize.sm,
  },
  md: {
    padding: `${spacing[3]} ${spacing[5]}`,
    fontSize: typography.fontSize.base,
  },
  lg: {
    padding: `${spacing[4]} ${spacing[6]}`,
    fontSize: typography.fontSize.lg,
  },
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: colors.brand.yamahaBlue,
    color: colors.text.onBrand,
    border: `1px solid ${colors.brand.yamahaBlue}`,
  },
  secondary: {
    backgroundColor: colors.brand.black,
    color: colors.text.inverse,
    border: `1px solid ${colors.brand.black}`,
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.brand.yamahaBlue,
    border: `1px solid ${colors.brand.yamahaBlue}`,
  },
  ghost: {
    backgroundColor: "transparent",
    color: colors.brand.yamahaBlue,
    border: "1px solid transparent",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        style={{
          fontFamily: typography.fontFamily.base,
          fontWeight: typography.fontWeight.semibold,
          borderRadius: radii.md,
          cursor: props.disabled ? "not-allowed" : "pointer",
          opacity: props.disabled ? 0.5 : 1,
          transition: "background-color 0.15s ease, border-color 0.15s ease",
          ...sizeStyles[size],
          ...variantStyles[variant],
          ...style,
        }}
      />
    );
  }
);

Button.displayName = "Button";
