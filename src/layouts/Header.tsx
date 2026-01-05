import { FaStore } from "react-icons/fa";
import {
  FiSearch,
  FiBell,
  FiMail,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import Dropdown from "../components/ui/Dropdown";
import { categories } from "../assets/data/categories";
import CartList from "./CartList";
import Button from "../components/ui/Button";
import { useWishlist } from "../hook/custom/wishlist/useWishlist";
import Select from "../components/ui/SelectList";
import { menus } from "../assets/data/menu";
import Avatar from "../components/ui/Avatar";
import Input from "../components/ui/Input";

type HeaderProps = {
  search: string;
  onSearch: (value: string) => void;
  notifCount: number;
  onPage: (value: string) => void;
};

export default function Header({
  search,
  onSearch,
  notifCount,
  onPage,
}: HeaderProps) {
  const { wishlist } = useWishlist();

  return (
    <header className="header-wrapper">
      <div className="header-main border-b border-gray-100">
        <h1 className="header-logo mr-3 sm:mr-4 md:mr-6">
          <button onClick={() => onPage("home")}>tokopedia</button>
        </h1>

        <div className="hidden md:block">
          <Dropdown
            width="w-[220px]"
            trigger={<Button variant="text">Kategori</Button>}
          >
            <Select list={categories} onSelect={(item) => console.log(item)} />
          </Dropdown>
        </div>

        <Input
          icon={<FiSearch />}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Cari di Tokopedia"
          className="h-[34px] sm:h-[36px] md:h-[40px] text-[13px] sm:text-[14px]"
          wrapperClassName="mr-2 md:mx-3"
        />

        <div className="header-actions">
          <Dropdown
            trigger={
              <Button
                icon={<FiShoppingCart />}
                variant="text"
                badge={wishlist.length}
                aria-label="wishlist"
                size="lg"
                className="hover:btn-hover-soft"
              />
            }
            width="w-[300px] md:w-[360px]"
            align="right"
          >
            <CartList />
            <Button
              onClick={() => onPage("checkout")}
              className="w-full"
              disabled={wishlist.length === 0}
            >
              Beli
            </Button>
          </Dropdown>
          <div className="block md:hidden">
            <Dropdown
              align="right"
              trigger={
                <Button
                  icon={<FiMenu />}
                  variant="text"
                  size="lg"
                  className="hover:btn-hover-soft"
                  aria-label="menu"
                />
              }
            >
              <Select list={menus} onSelect={() => console.log("test")} />
            </Dropdown>
          </div>
          <div className="hidden md:flex items-center gap-3 ml-2">
            <Dropdown
              trigger={
                <Button
                  icon={<FiBell />}
                  variant="text"
                  badge={notifCount}
                  aria-label="notification"
                  size="lg"
                  className="hover:btn-hover-soft"
                />
              }
            >
              Notifikasi
            </Dropdown>

            <Dropdown
              trigger={
                <Button
                  icon={<FiMail />}
                  badge={0}
                  aria-label="message"
                  variant="text"
                  size="lg"
                  className="hover:btn-hover-soft"
                />
              }
            >
              Pesan
            </Dropdown>

            <div className="header-divider" />

            <Button
              icon={<FaStore className="text-[20px]" />}
              size="md"
              variant="text"
            >
              Toko
            </Button>

            <Dropdown align="right" trigger={<Avatar name="Dhea" />}>
              Profile
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="mx-auto flex justify-end ">
        <Button
          icon={<CiLocationOn />}
          variant="text"
          size="xs"
          className="location-text"
        >
          Dikirim ke -
        </Button>
      </div>
    </header>
  );
}
