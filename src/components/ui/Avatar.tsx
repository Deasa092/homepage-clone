import { useState } from "react";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
}

export default function Avatar({
  src,
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const [error, setError] = useState(false);

  const sizes: Record<AvatarSize, string> = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const initial = name?.charAt(0).toUpperCase();

  return (
    <div className={`flex items-center gap-2 ${className} cursor-pointer`}>
      <div
        className={`
          ${sizes[size]}
          flex items-center justify-center
          rounded-full bg-gray-200 text-gray-700
          overflow-hidden font-semibold
        `}
      >
        {src && !error ? (
          <img
            src={src}
            alt={name ?? "avatar"}
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          initial
        )}
      </div>

      {name && (
        <span className="text-[14px] text-gray-700 leading-none">
          {name}
        </span>
      )}
    </div>
  );
}
