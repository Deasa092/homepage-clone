import { FiHeart } from "react-icons/fi";
import type { Product } from "../services/product.service";

type ProductCardProps = {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
};

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  return (
    <div className=" p-3 border-card bg-gray-50 hover:shadow transition">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-32 w-full object-cover mb-2 rounded"
        />

        <button
          onClick={() => onToggleWishlist(product)}
          className={`
            absolute top-1 right-1
            rounded-full p-1
            shadow
            transition
            ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white text-gray-500 hover:text-red-500"
            }
          `}
        >
          <FiHeart size={16} />
        </button>
      </div>

      <h3 className="text-sm line-clamp-2 mb-1">
        {product.title}
      </h3>

      <p className="font-semibold text-green-600">
        $ {product.price.toLocaleString("us-US")}
      </p>

      <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
        <span className="text-yellow-500">⭐</span>
        <span>{product.rating.toFixed(1)}</span>
      </div>
    </div>
  );
}
