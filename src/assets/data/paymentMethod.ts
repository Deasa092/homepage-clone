export type PaymentMethod = "transfer" | "ewallet" | "cod";

export const paymentMethods: {
  label: string;
  value: PaymentMethod;
}[] = [
  { label: "Transfer Bank", value: "transfer" },
  { label: "E-Wallet", value: "ewallet" },
  { label: "COD (Bayar di Tempat)", value: "cod" },
];
