import { createContext } from "react";
import type { Product } from "../../../services/product.service";

export type WishlistContextType = {
  wishlist: Product[];
  quantities: Record<number, number>;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: number) => boolean;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);
