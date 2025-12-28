import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg py-2 text-sm font-semibold transition disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-green-600 text-white enabled:hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400",
    secondary:
      "bg-gray-200 text-gray-600 enabled:hover:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
