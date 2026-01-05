import Button from "./Button";
import type { ReactNode } from "react";

type SelectItem = {
  id: number;
  name: string;
  value?: unknown;
  icon?: ReactNode;
  route?: string;
};

type Props = {
  list: SelectItem[];
  onSelect: (item: SelectItem) => void;
};

const Select = ({ list, onSelect }: Props) => {
  return (
    <ul className="py-2">
      {list.map((item) => (
        <li key={item.id}>
          <Button
            variant="text"
            className="
              mb-1 md:mb-2 w-full justify-start gap-2
              hover:btn-hover-soft
            "
            onClick={() => onSelect(item)}
          >
            {item.icon && (
              <span className="text-base text-gray-500">
                {item.icon}
              </span>
            )}

            <span>{item.name}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Select;
