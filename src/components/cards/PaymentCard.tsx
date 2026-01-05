import Button from "../ui/Button";

type PaymentMethod = "transfer" | "ewallet" | "cod";

interface Props {
  label: string;
  value: PaymentMethod;
  selected: PaymentMethod;
  onSelect: (v: PaymentMethod) => void;
}

export default function PaymentCard({
  label,
  value,
  selected,
  onSelect,
}: Props) {
  const active = selected === value;

  return (
    <Button
      variant="custom"
      onClick={() => onSelect(value)}
      className={`
        flex w-full items-center justify-between
        rounded-lg border px-4 py-3 text-basic
        ${active ? "border-tokopedia bg-green-50" : "border-gray-200"}
      `}
    >
      <span>{label}</span>

      {active && <span className="font-semibold text-tokopedia">✓</span>}
    </Button>
  );
}
