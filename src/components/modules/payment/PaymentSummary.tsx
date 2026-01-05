import Button from "../../ui/Button";

type Item = {
  id: number;
  title: string;
  price: number;
};

type Props =
  | {
      mode: "tagihan";
      data: {
        type: string;
        price: number;
        phone: string;
      };
      onPay: () => void;
    }
  | {
      mode: "produk";
      items: Item[];
      total: number;
      onPay: () => void;
    };

export default function PaymentSummary(props: Props) {
  return (
    <div className="h-fit rounded-xl border bg-white p-4">
      <h2 className="mb-3 text-subtitle font-semibold">Ringkasan Pembayaran</h2>

      <div className="space-y-2 text-basic">
        {props.mode === "tagihan" ? (
          <div className="flex justify-between">
            <span>{props.data.type.toUpperCase()}</span>
            <span>
              Rp{props.data.price.toLocaleString("id-ID")}
            </span>
          </div>
        ) : (
          props.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span className="line-clamp-1">{item.title}</span>
              <span>Rp{item.price.toLocaleString("id-ID")}</span>
            </div>
          ))
        )}
      </div>

      <div className="my-4 border-t" />

      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>
          Rp
          {props.mode === "tagihan"
            ? props.data.price.toLocaleString("id-ID")
            : props.total.toLocaleString("id-ID")}
        </span>
      </div>

      <Button className="mt-4 w-full" onClick={props.onPay}>
        Bayar
      </Button>
    </div>
  );
}
