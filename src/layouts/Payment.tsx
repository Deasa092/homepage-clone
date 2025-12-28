import { useState } from "react";
import { UseWishlist } from "../hook/Context";
import PopupFeedback from "../components/PopupFeedback";
import PaymentOption from "../components/PaymentOption";
import type { TagihanData } from "./Tagihan";

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
  const { wishlist } = UseWishlist();
  const [method, setMethod] = useState<PaymentMethod>("transfer");
  const [feedback, setFeedback] = useState<Feedback>("none");

  const total = wishlist.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    const success = Math.random() > 0.5;
    setFeedback(success ? "success" : "error");
  };
  const isTagihan = payload.mode === "tagihan";
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => (isTagihan ? onBack("home") : onBack("checkout"))}
          className="mb-4 text-sm text-green-600"
        >
          ← Kembali ke {isTagihan ? "Home" : "Checkout"}
        </button>

        <h1 className="mb-6 text-2xl font-semibold">Pembayaran</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border bg-white p-4">
              <h2 className="mb-3 text-lg font-semibold">Metode Pembayaran</h2>

              <div className="space-y-3">
                <PaymentOption
                  label="Transfer Bank"
                  value="transfer"
                  selected={method}
                  onSelect={setMethod}
                />

                <PaymentOption
                  label="E-Wallet"
                  value="ewallet"
                  selected={method}
                  onSelect={setMethod}
                />

                <PaymentOption
                  label="COD (Bayar di Tempat)"
                  value="cod"
                  selected={method}
                  onSelect={setMethod}
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-xl border bg-white p-4">
            <h2 className="mb-3 text-lg font-semibold">Ringkasan Pembayaran</h2>

            <div className="space-y-2 text-sm">
              {isTagihan ? (
                <div key={payload.data.phone} className="flex justify-between">
                  <span className="line-clamp-1">{payload.data.type.toUpperCase()}</span>
                  <span>Rp{payload.data.price.toLocaleString("id-ID")}</span>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="line-clamp-1">{item.title}</span>
                    <span>Rp{item.price.toLocaleString("id-ID")}</span>
                  </div>
                ))
              )}
            </div>

            <div className="my-4 border-t" />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>
                Rp
                {isTagihan
                  ? payload.data.price.toLocaleString("id-ID") 
                  : total.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              onClick={handlePay}
              className="
                mt-4 w-full rounded-lg py-2 text-sm font-semibold
                bg-green-600 text-white
              "
            >
              Bayar
            </button>
          </div>
        </div>
      </div>

      <PopupFeedback
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
