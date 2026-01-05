import type { ButtonHTMLAttributes, ReactNode } from "react";
import Badge from "./Badge";

type Variant = "primary" | "secondary" | "text" | "custom";
type Size = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  badge?: number;
  badgeMax?: number;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  badge,
  badgeMax = 99,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg transition disabled:cursor-not-allowed";

  const variants: Record<Variant, string> = {
    primary:
      "bg-tokopedia text-white enabled:hover:bg-green-600 disabled:disabled-btn",
    secondary:
      "bg-gray-200 text-gray-600 enabled:hover:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400",
    text: "bg-none text-gray-800 border-none",
    custom:""
  };

  const sizes: Record<Size, string> = {
    xs: "px-1 py-0.5 text-xs gap-1",
    sm: "px-2 py-1 text-sm gap-1.5",
    md: "p-2 text-basic gap-2",
    lg: "p-2 text-subtitle gap-2",
  };

  const isIconOnly = !!icon && !children;

  return (
    <button
      disabled={disabled}
      className={`
          ${base}
          ${sizes[size]}
          ${variants[variant]}
          ${isIconOnly ? "p-2" : ""}
          ${className}
        `}
      aria-label={isIconOnly ? "icon button" : undefined}
      {...props}
    >
      {typeof badge === "number" && badge > 0 && (
        <Badge value={badge} max={badgeMax} />
      )}
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
