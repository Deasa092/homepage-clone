type Variant = "success" | "error";

interface Props {
  open: boolean;
  variant: Variant;
  title: string;
  description?: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
}

export default function Popup({
  open,
  variant,
  title,
  description,
  onClose,
  onConfirm,
  confirmText = "OK",
}: Props) {
  if (!open) return null;

  const isSuccess = variant === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-lg">
        <div
          className={`
            mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full
            ${
              isSuccess
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }
            text-3xl
          `}
        >
          {isSuccess ? "✓" : "✕"}
        </div>

        <h2 className="mb-2 text-lg font-semibold">{title}</h2>

        {description && (
          <p className="mb-6 text-basic text-gray-500">{description}</p>
        )}

        {onConfirm ? (
          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className={`
                w-full rounded-lg py-2 text-basic font-semibold text-white
                ${isSuccess ? "bg-green-600" : "bg-red-600"}
              `}
            >
              {confirmText}
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className={`
              w-full rounded-lg py-2 text-basic font-semibold text-white
              ${isSuccess ? "bg-green-600" : "bg-red-600"}
            `}
          >
            {confirmText}
          </button>
        )}
      </div>
    </div>
  );
}
