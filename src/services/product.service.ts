export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
};

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
};

type ProductResponse = {
  products: ApiProduct[];
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products?limit=30");
  const data: ProductResponse = await res.json();

  return data.products.map(mapProduct);
}

export async function searchProducts(
  query: string
): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const data: ProductResponse = await res.json();

  return data.products.map(mapProduct);
}

function mapProduct(p: ApiProduct): Product {
  return {
    id: p.id,
    title: p.title,
    price: p.price,
    thumbnail: p.thumbnail,
    category: p.category,
    rating: p.rating
  };
}
