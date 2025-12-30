import { WishlistProvier } from "./wishlist/WishlistProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <WishlistProvier>{children}</WishlistProvier>;
};

export default AppProvider;
