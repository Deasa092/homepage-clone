import type { Product } from "../../services/product.service";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaHeart } from "react-icons/fa";

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
    <Card className="relative p-2 border-card bg-gray-50">
      <div className="flex flex-col items-center text-center">
        <Button
          variant="custom"
          onClick={() => onToggleWishlist(product)}
          className="absolute top-2 right-2 z-10"
          aria-label="like"
        >
          <FaHeart
            size={16}
            className={
              isWishlisted
                ? "text-red-500"
                : "text-gray-400 hover:text-gray-500"
            }
          />
        </Button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-32 w-auto object-cover mb-2 rounded"
        />
      </div>
      <div className="flex flex-col items-start text-left">
        <h3 className="text-basic line-clamp-2 mb-1">{product.title}</h3>

        <p className="font-semibold text-green-600">
          $ {product.price.toLocaleString("en-US")}
        </p>

        <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
          <span className="text-yellow-500">⭐</span>
          <span>{product.rating.toFixed(1)}</span>
        </div>
      </div>
    </Card>
  );
}
