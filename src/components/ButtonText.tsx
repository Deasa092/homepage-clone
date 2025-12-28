import type { ButtonHTMLAttributes } from "react";

type ButtonTextProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonText({
  children,
  className = "",
  ...props
}: ButtonTextProps) {
  return (
    <button
      {...props}
      className={`
        hidden sm:block
        text-[13px] md:text-[14px]
        text-gray-800
        mr-3 md:mr-4
        whitespace-nowrap
        btn-hover-soft
        ${className}
      `}
    >
      {children}
    </button>
  );
}
