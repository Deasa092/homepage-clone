import {
  FiGrid,
  FiSmartphone,
  FiFileText,
  FiHeadphones,
  FiHeart,
  FiDollarSign,
  FiMonitor,
} from "react-icons/fi";

type ShortcutItem = {
  label: string;
  icon: React.ReactNode;
};

const shortcuts: ShortcutItem[] = [
  { label: "Kategori", icon: <FiGrid /> },
  { label: "Handphone & Tablet", icon: <FiSmartphone /> },
  { label: "Top-Up & Tagihan", icon: <FiFileText /> },
  { label: "Elektronik", icon: <FiHeadphones /> },
  { label: "Perawatan Hewan", icon: <FiHeart /> },
  { label: "Keuangan", icon: <FiDollarSign /> },
  { label: "Komputer & Laptop", icon: <FiMonitor /> },
];

const QuickShortcut = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 py-2">
        {shortcuts.map((item) => (
          <button
            key={item.label}
            className="
              flex shrink-0 items-center gap-2
              rounded-xl border border-gray-300
              bg-white px-4 py-2
              text-xs font-medium text-gray-800
              hover:bg-gray-50
            "
          >
            <span className="text-lg text-green-600">
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickShortcut;
