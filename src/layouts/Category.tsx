import { categories } from "../assets/data/categories";
import CategoryCard from "../components/cards/CategoryCard";
import Carousel from "../components/ui/Carousel";

interface Props {
  onCategoryChange: (category: string) => void;
}

const Category = ({ onCategoryChange }: Props) => {
  return (
    <section className="md:w-1/2">
      <h2 className="mb-4 text-subtitle text-gray-800">Kategori Pilihan</h2>

      <Carousel
        visibleCount={{
          base: 2,
          sm: 3,
          lg: 4,
        }}
      >
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            onSelect={onCategoryChange}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Category;
