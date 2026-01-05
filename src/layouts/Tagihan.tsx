import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Dropdown from "../components/ui/Dropdown";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";

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
    <section className="md:w-1/2 pt-3 md:p-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="md:text-lg font-semibold">Top Up & Tagihan</h2>

        <Dropdown align="right" trigger={<FiMoreVertical />}>
          Menu
        </Dropdown>
      </div>

      <div className="border-card p-3 text-basic">
        <div className="mb-4 flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`mr-6 pb-2 font-semibold ${
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
            <Label
              label={activeTab === "pln" ? "ID Pelanggan" : "Nomor Telepon"}
            />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Masukkan nomor"
              className="w-full rounded-lg border px-3 py-1 text-basic h-[35px]"
            />
          </div>

          <div>
           <Label label="Nomimal"/>
            <select
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-basic"
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
