import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

export type TagihanType = "pulsa" | "data" | "pln" | "roaming";

export interface TagihanData {
  type: TagihanType;
  phone: string;
  price: number;
}

const tabs: { key: TagihanType; label: string }[] = [
  { key: "pulsa", label: "Pulsa" },
  { key: "data", label: "Paket Data" },
  { key: "pln", label: "Listrik PLN" },
  { key: "roaming", label: "Roaming" },
];

type Props = {
  onPay: (data: TagihanData) => void;
};

export default function Tagihan({ onPay }: Props) {
  const [activeTab, setActiveTab] = useState<TagihanType>("pulsa");
  const [phone, setPhone] = useState("");
  const [nominal, setNominal] = useState("");

  const isDisabled = !phone || !nominal;

  return (
    <section className="w-1/2">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Up & Tagihan</h2>

        <Dropdown align="right" trigger={<FiMoreVertical />}>
          Menu
        </Dropdown>
      </div>

      <div className="border-card p-3">
        <div className="mb-4 flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`mr-6 pb-2 text-sm font-semibold ${
                activeTab === tab.key
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <label className="text-sm text-gray-600">
              {activeTab === "pln" ? "ID Pelanggan" : "Nomor Telepon"}
            </label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm"
              placeholder="Masukkan nomor"
            />
          </div>

          <div>
            <label htmlFor="nominal" className="text-sm text-gray-600">
              Nominal
            </label>

            <select
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm"
            >
              <option value="">Pilih</option>
              <option value="20000">20.000</option>
              <option value="50000">50.000</option>
              <option value="100000">100.000</option>
            </select>
          </div>
        </div>
      </div>

      <Button
        disabled={isDisabled}
        className="mt-4 w-full"
        onClick={() =>
          onPay({
            type: activeTab,
            phone,
            price: Number(nominal),
          })
        }
      >
        Beli
      </Button>
    </section>
  );
}
