import { useState } from "react";
import type { TagihanData } from "./Tagihan";
import { useWishlist } from "../hook/custom/wishlist/useWishlist";
import Popup from "../components/ui/Popup";
import PaymentCard from "../components/cards/PaymentCard";
import { paymentMethods } from "../assets/data/paymentMethod";
import Button from "../components/ui/Button";
import PaymentSummary from "../components/modules/payment/PaymentSummary";

type ProductItem = {
  id: number;
  title: string;
  price: number;
};

type PaymentPayload =
  | { mode: "tagihan"; data: TagihanData }
  | { mode: "produk"; data: ProductItem[] };

type Props = {
  payload: PaymentPayload;
  onBack: (value: string) => void;
  onSuccess: () => void;
};
type PaymentMethod = "transfer" | "ewallet" | "cod";
type Feedback = "none" | "success" | "error";

export default function Payment({ onBack, onSuccess, payload }: Props) {
  const { wishlist } = useWishlist();
  const [method, setMethod] = useState<PaymentMethod>("transfer");
  const [feedback, setFeedback] = useState<Feedback>("none");

  const total = wishlist.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    console.log(method);

    const success = Math.random() > 0.5;
    setFeedback(success ? "success" : "error");
  };
  const isTagihan = payload.mode === "tagihan";
  const handleBack = () => {
    onBack(isTagihan ? "home" : "checkout");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <Button
          variant="text"
          onClick={handleBack}
          className="mb-1 md:mb-2 text-tokopedia"
        >
          ← Kembali ke {isTagihan ? "Home" : "Checkout"}
        </Button>

        <h1 className="mb-2 md:mb-4 text-title font-semibold">Pembayaran</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border bg-white p-4">
              <h2 className="mb-3 text-subtitle font-semibold">
                Metode Pembayaran
              </h2>
              <div className="space-y-3">
                {paymentMethods.map((item) => (
                  <PaymentCard
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    selected={method}
                    onSelect={setMethod}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          {isTagihan ? (
              <PaymentSummary
                mode="tagihan"
                data={payload.data}
                onPay={handlePay}
              />
            ) : (
              <PaymentSummary
                mode="produk"
                items={wishlist}
                total={total}
                onPay={handlePay}
              />
            )}
        </div>
      </div>

      <Popup
        open={feedback !== "none"}
        variant={feedback === "success" ? "success" : "error"}
        title={
          feedback === "success" ? "Pembayaran Berhasil" : "Pembayaran Gagal"
        }
        description={
          feedback === "success"
            ? "Pesanan kamu sedang diproses"
            : "Terjadi kesalahan, silakan coba lagi"
        }
        confirmText={feedback === "success" ? "Kembali ke Home" : "Coba Lagi"}
        onClose={() => setFeedback("none")}
        onConfirm={
          feedback === "success"
            ? () => {
                setFeedback("none");
                onSuccess();
              }
            : handlePay
        }
      />
    </>
  );
}
