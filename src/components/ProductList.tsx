import { useEffect, useState } from "react";
import { getDocuments } from "../lib/queries";
import { Category } from "../types/Category";
import { Product } from "../types/Product";
import NoResults from "./NoResults";
import ProductCard from "./ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getDocuments("categories", setCategories);
  }, []);

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard key={item.id} data={item} categories={categories} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
