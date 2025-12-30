import type { Category } from "../assets/data/categories";

interface Props {
  category: Category;
  onSelect: (categoryName: string) => void;
}

const CategoryCard = ({ category, onSelect }: Props) => {
  return (
    <button
      onClick={() => onSelect(category.name)}
      className="flex flex-col items-center justify-center
                 border-card
                 bg-white p-4
                 hover:shadow-md hover:border-green-500
                 transition"
    >
      <div className="text-3xl  mb-2">{category.icon}</div>
      <span className="text-sm font-medium text-gray-700 text-center">
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;
