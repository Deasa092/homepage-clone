import type { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  count?: number;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  count = 0,
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-700 btn-hover-soft"
      aria-label="icon button"
    >
      {/* ICON */}
      <span className="text-[22px] leading-none">
        {icon}
      </span>

      {/* BADGE */}
      {count > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            min-w-[18px] h-[18px]
            px-1
            flex items-center justify-center
            bg-red-500 text-white
            text-[11px] font-medium
            rounded-full
            leading-none
            z-10
          "
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
