import type { IconType } from "react-icons";
import { FiDollarSign, FiFileText, FiGrid, FiHeadphones, FiHeart, FiMonitor, FiSmartphone } from "react-icons/fi";

export type ShortcutItem = {
  label: string;
  icon: IconType;
};

export const shortcuts: ShortcutItem[] = [
  { label: "Kategori", icon: FiGrid  },
  { label: "Handphone & Tablet", icon: FiSmartphone  },
  { label: "Top-Up & Tagihan", icon: FiFileText },
  { label: "Elektronik", icon: FiHeadphones },
  { label: "Perawatan Hewan", icon: FiHeart },
  { label: "Keuangan", icon: FiDollarSign },
  { label: "Komputer & Laptop", icon: FiMonitor },
];
