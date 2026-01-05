import { FiMinus, FiPlus } from "react-icons/fi";
import type { Product } from "../../services/product.service";
import { useWishlist } from "../../hook/custom/wishlist/useWishlist";

interface Props {
  product: Product;
}

const WishlistProduct = ({ product }: Props) => {
  const {
    quantities,
    increaseQty,
    decreaseQty,
    toggleWishlist,
  } = useWishlist();

  const qty = quantities[product.id] ?? 1;

  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-12 w-12 rounded-lg object-cover"
      />

      <div className="flex-1">
        <p className="line-clamp-1 text-basic font-medium">
          {product.title}
        </p>

        <button
          onClick={() => toggleWishlist(product)}
          className="mt-1 text-xs font-semibold text-red-500 hover:underline"
        >
          Hapus
        </button>
      </div>

      {/* QTY CONTROL */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(product.id)}
          className="rounded border p-1"
        >
          <FiMinus size={12} />
        </button>

        <span className="min-w-[16px] text-center text-basic">
          {qty}
        </span>

        <button
          onClick={() => increaseQty(product.id)}
          className="rounded border p-1"
        >
          <FiPlus size={12} />
        </button>
      </div>

      <p className="ml-2 text-basic font-semibold whitespace-nowrap">
        Rp{(qty * product.price).toLocaleString("id-ID")}
      </p>
    </div>
  );
};

export default WishlistProduct;
