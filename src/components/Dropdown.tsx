import type { ReactNode } from "react";

type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right" | "center";
  width?: string;
};

export default function Dropdown({
  trigger,
  children,
  align = "left",
  width = "w-auto",
}: DropdownProps) {
  const alignmentClass =
    align === "right"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div className="relative group inline-block">
      <div className="cursor-pointer">
        {trigger}
      </div>

      <div
        className={`
          absolute top-full mt-2
          ${alignmentClass}
          ${width}
          inline-block
          bg-white
          border border-gray-200
          rounded-lg
          shadow-lg
          opacity-0 invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all duration-200
          z-50
          px-3 py-2
        `}
      >
        {children}
      </div>
    </div>
  );
}
