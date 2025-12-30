import { useState } from "react";
import type { Product } from "../services/product.service";
import { WishlistContext, type WishlistContextType } from "./custom/wishlist/WishlistContext";

export function WishlistProvier({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const toggleWishlist: WishlistContextType["toggleWishlist"] = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        setQuantities((q) => {
          const copy = { ...q };
          delete copy[product.id];
          return copy;
        });
        return prev.filter((p) => p.id !== product.id);
      }

      setQuantities((q) => ({ ...q, [product.id]: 1 }));
      return [...prev, product];
    });
  };

  const increaseQty = (id: number) => {
    setQuantities((q) => ({
      ...q,
      [id]: (q[id] ?? 1) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setQuantities((q) => {
      const current = q[id] ?? 1;
      if (current <= 1) return q;
      return { ...q, [id]: current - 1 };
    });
  };

  const isWishlisted = (id: number) => wishlist.some((p) => p.id === id);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        quantities,
        toggleWishlist,
        isWishlisted,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
