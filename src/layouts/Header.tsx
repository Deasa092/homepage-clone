import { FaStore } from "react-icons/fa";
import { FiSearch, FiBell, FiMail, FiShoppingCart } from "react-icons/fi";
import IconButton from "../components/ButtonIcon";
import ButtonText from "../components/ButtonText";
import { CiLocationOn } from "react-icons/ci";
import Dropdown from "../components/Dropdown";
import { UseWishlist } from "../hook/Context";
import { categories } from "../assets/data/categories";
import CartList from "./CartList";
import Button from "../components/Button";

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
  const { wishlist } = UseWishlist();

  return (
    <header className="header-wrapper">
      <div className="header-main border-b border-gray-100">
        <h1 className="header-logo mr-3 sm:mr-4 md:mr-6">
          <button onClick={() => onPage("home")}>tokopedia</button>
        </h1>

        <div className="hidden md:block">
          <Dropdown width="w-[240px]" trigger={<ButtonText>Kategori</ButtonText>}>
            <ul className="py-2">
              {categories.map((item) => (
                <li
                  key={item.id}
                  className="
                      px-4 py-2
                      text-sm
                      text-gray-700
                      cursor-pointer
                      btn-hover-soft
                    "
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>

        <div className="search-wrapper">
          <FiSearch className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[16px] sm:text-[18px]" />
          <input
            className="search-input h-[34px] sm:h-[36px] md:h-[40px]
                   pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-[14px]"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cari di Tokopedia"
          />
        </div>

        <div className="header-actions">
          <Dropdown
            trigger={
              <IconButton icon={<FiShoppingCart />} count={wishlist.length} />
            }
            width="w-[400px]"
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

          <Dropdown
            trigger={<IconButton icon={<FiBell />} count={notifCount} />}
          >
            Notifikasi
          </Dropdown>
          <Dropdown trigger={<IconButton icon={<FiMail />} count={0} />}>
            Pesan
          </Dropdown>

          <div className="hidden md:flex items-center gap-3 ml-2">
            <div className="header-divider" />

            <div className="flex items-center gap-2 text-[14px]">
              <FaStore className="text-[20px]" />
              <span>Toko</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="avatar">d</div>
              <span className="text-[14px]">dhea</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex justify-end ">
        <p className="location-text">
          <CiLocationOn />
          Dikirim ke -
        </p>
      </div>
    </header>
  );
}
