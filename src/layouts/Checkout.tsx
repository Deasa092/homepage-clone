import Button from "../components/ui/Button";
import { useWishlist } from "../hook/custom/wishlist/useWishlist";
import type { Product } from "../services/product.service";

interface Props {
  onBack: () => void;
  onPay: (data: Product[]) => void;
}

export default function Checkout({ onBack, onPay }: Props) {
  const { wishlist } = useWishlist();

  const total = wishlist.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={onBack} className="mb-4 text-basic text-green-600">
        ← Kembali ke Home
      </button>
      <h1 className="mb-6 text-2xl font-semibold">Checkout</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {wishlist.length === 0 && (
            <p className="text-gray-500">Tidak ada produk di checkout</p>
          )}

          {wishlist.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-lg border bg-white p-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-16 w-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <p className="font-medium">{product.title}</p>
                <p className="text-basic text-gray-500">{product.category}</p>
              </div>

              <p className="font-semibold whitespace-nowrap">
                Rp{product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border bg-white p-4 h-fit">
          <h2 className="mb-4 text-lg font-semibold">Ringkasan Belanja</h2>

          <div className="space-y-2 text-basic">
            <div className="flex justify-between">
              <span>Total Item</span>
              <span>{wishlist.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rp{total.toLocaleString("id-ID")}</span>
            </div>

            <div className="flex justify-between">
              <span>Biaya Layanan</span>
              <span>Rp0</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>Rp{total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <Button
            onClick={() =>
              onPay({
                ...wishlist,
              })
            }
            className="mt-4 w-full"
            disabled={wishlist.length === 0}
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
}
