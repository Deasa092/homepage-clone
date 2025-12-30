import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import {
  getProducts,
  searchProducts,
  type Product,
} from "../services/product.service";
import { useWishlist } from "../hook/custom/wishlist/useWishlist";

type ProductProps = {
  search: string;
};

export default function ProductList({ search }: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const { toggleWishlist, isWishlisted } = useWishlist();

  useEffect(() => {
    if (search) {
      searchProducts(search).then(setProducts);
    } else {
      getProducts().then(setProducts);
    }
  }, [search]);

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Rekomendasi Produk
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={isWishlisted(product.id)}
            onToggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </main>
  );
}
