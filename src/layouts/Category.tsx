import { useState } from "react";
import { categories } from "../assets/data/categories";
import CategoryCard from "../components/CategoryCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  onCategoryChange: (category: string) => void;
}

const VISIBLE_COUNT = 4;

const Category = ({ onCategoryChange }: Props) => {
  const [startIndex, setStartIndex] = useState(0);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE_COUNT < categories.length;

  return (
    <section className="w-1/2">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Kategori Pilihan
      </h2>

      <div className="group relative">
        <button
          onClick={() => canPrev && setStartIndex((i) => i - 1)}
          disabled={!canPrev}
          className="left-2 btn-hover-hide"
        >
          <FiChevronLeft size={18} />
        </button>

        <div className="grid grid-cols-4 gap-4 px-6">
          {categories
            .slice(startIndex, startIndex + VISIBLE_COUNT)
            .map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                onSelect={onCategoryChange}
              />
            ))}
        </div>

        <button
          onClick={() => canNext && setStartIndex((i) => i + 1)}
          disabled={!canNext}
          className="right-2 btn-hover-hide"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Category;
