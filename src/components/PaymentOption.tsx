type PaymentMethod = "transfer" | "ewallet" | "cod";

interface PaymentOptionProps {
  label: string;
  value: PaymentMethod;
  selected: PaymentMethod;
  onSelect: (v: PaymentMethod) => void;
}

export default function PaymentOption({
  label,
  value,
  selected,
  onSelect,
}: PaymentOptionProps) {
  const active = selected === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`
        flex w-full items-center justify-between
        rounded-lg border px-4 py-3 text-sm
        ${active ? "border-green-600 bg-green-50" : "border-gray-200"}
      `}
    >
      <span>{label}</span>

      {active && (
        <span className="font-semibold text-green-600">
          ✓
        </span>
      )}
    </button>
  );
}
