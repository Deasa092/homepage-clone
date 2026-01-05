import type { InputHTMLAttributes, ReactNode } from "react";

type InputSize = "sm" | "md" | "lg";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: InputSize;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
}

export default function Input({
  label,
  icon,
  iconPosition = "left",
  size = "md",
  error,
  helperText,
  disabled,
  className = "",
  wrapperClassName = "",
  ...props
}: Props) {
  const hasIcon = !!icon;
  const isError = !!error;

  const sizes: Record<InputSize, string> = {
    sm: "h-[34px] text-sm",
    md: "h-[40px] text-[14px]",
    lg: "h-[44px] text-base",
  };

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        {hasIcon && iconPosition === "left" && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          disabled={disabled}
          {...props}
          className={`
            w-full
            rounded-lg
            border
            transition
            focus:outline-none
            ${sizes[size]}
            ${hasIcon && iconPosition === "left" ? "pl-9" : "pl-3"}
            ${hasIcon && iconPosition === "right" ? "pr-9" : "pr-3"}
            ${
              isError
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-200 focus:ring-1 focus:ring-green-500"
            }
            ${
              disabled
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700"
            }
            ${className}
          `}
        />

        {hasIcon && iconPosition === "right" && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
      </div>

      {/* HELPER / ERROR TEXT */}
      {(helperText || error) && (
        <p
          className={`mt-1 text-xs ${
            isError ? "text-red-500" : "text-gray-500"
          }`}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  );
}
