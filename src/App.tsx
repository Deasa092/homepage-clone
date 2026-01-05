import { useState } from "react";
import Header from "./layouts/Header";
import ProductList from "./layouts/ProductList";
import Category from "./layouts/Category";
import Tagihan, { type TagihanData } from "./layouts/Tagihan";
import Shortcut from "./layouts/Shortcut";
import Payment from "./layouts/Payment";
import Checkout from "./layouts/Checkout";
import type { Product } from "./services/product.service";

type PaymentPayload =
  | { mode: "tagihan"; data: TagihanData }
  | { mode: "produk"; data: Product[] };

export default function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");
  const [paymentPayload, setPaymentPayload] = useState<PaymentPayload | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gray-100 text-basic">
      <Header
        search={search}
        onSearch={setSearch}
        notifCount={0}
        onPage={setPage}
      />

      {page === "home" && (
        <main className="bg-white p-4">
          <div className="mx-auto max-w-[1200px] px-4 py-4 border-card shadow">
            <div className="md:flex gap-6 ">
              <Category onCategoryChange={() => console.log("test")} />
              <Tagihan
                onPay={(data) => {
                  setPaymentPayload({
                    mode: "tagihan",
                    data,
                  });
                  setPage("payment");
                }}
              />
            </div>

            <div className="mt-6">
              <Shortcut />
            </div>
          </div>

          <ProductList search={search} />
        </main>
      )}

      {page === "checkout" && (
        <Checkout
          onBack={() => setPage("home")}
          onPay={(data) => {
            setPaymentPayload({
              mode: "produk",
              data,
            });
            setPage("payment");
          }}
        />
      )}

      {page === "payment" && paymentPayload && (
        <Payment
          payload={paymentPayload}
          onBack={setPage}
          onSuccess={() => {
            setPaymentPayload(null);
            setPage("home");
          }}
        />
      )}
    </div>
  );
}
