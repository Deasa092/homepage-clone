import WishlistProduct from "../components/WishlistProduct";
import { useWishlist } from "../hook/custom/wishlist/useWishlist";

const CartList = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-lg font-semibold">
          Keranjang{" "}
          <span className="font-normal text-gray-500">
            ({wishlist.length})
          </span>
        </h2>

        <button className="text-sm font-semibold text-green-600">
          Lihat
        </button>
      </div>

      <div className="divide-y">
        {wishlist.map((product) => (
          <WishlistProduct
            key={product.id}
            product={product}
          />
        ))}

        {wishlist.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-gray-500">
            Wishlist masih kosong
          </p>
        )}
      </div>
    </div>
  );
};

export default CartList;
