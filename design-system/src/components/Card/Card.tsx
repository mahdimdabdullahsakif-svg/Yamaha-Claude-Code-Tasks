import React from "react";
import { colors, radii, shadows, spacing } from "../../tokens";

export type CardElevation = "none" | "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevation = "sm", style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        style={{
          backgroundColor: colors.surface.page,
          border: `1px solid ${colors.surface.border}`,
          borderRadius: radii.lg,
          padding: spacing[6],
          boxShadow: shadows[elevation],
          ...style,
        }}
      />
    );
  }
);

Card.displayName = "Card";
