import type { Category } from "../../assets/data/categories";
import Card from "../ui/Card";

interface Props {
  category: Category;
  onSelect: (categoryName: string) => void;
}

const CategoryCard = ({ category, onSelect }: Props) => {
  return (
    <Card
      onClick={() => onSelect(category.name)}
      className="bg-white p-4 min-h-[140px] w-full"
    >
      <div className="flex items-center justify-center h-12 text-super">
        {category.icon}
      </div>

      <span
        className="
          text-basic font-medium text-gray-700 text-center
          line-clamp-2
        "
      >
        {category.name}
      </span>
    </Card>
  );
};

export default CategoryCard;
