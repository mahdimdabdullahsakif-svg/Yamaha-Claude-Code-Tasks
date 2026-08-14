import React from "react";
import { colors, radii, spacing, typography } from "../../tokens";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid = false, style, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        style={{
          fontFamily: typography.fontFamily.base,
          fontSize: typography.fontSize.base,
          color: colors.text.primary,
          backgroundColor: colors.surface.page,
          border: `1px solid ${invalid ? colors.semantic.danger : colors.surface.border}`,
          borderRadius: radii.md,
          padding: `${spacing[3]} ${spacing[4]}`,
          outline: "none",
          ...style,
        }}
      />
    );
  }
);

Input.displayName = "Input";
