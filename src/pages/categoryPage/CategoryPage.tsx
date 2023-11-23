import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Billboard from "../../components/Billboard";
import Container from "../../components/Container";
import { getDocument, getSnapshots } from "../../lib/queries";
import { Billboard as BillboardType } from "../../types/Billboard";
import { Category } from "../../types/Category";
import { Product } from "../../types/Product";
import ProductList from "../../components/ProductList";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [billboard, setBillboard] = useState<BillboardType | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getDocument<Category | null>("categories", categoryId, setCategory);
    getSnapshots<Product>("products", setProducts, {
      property: "category",
      value: categoryId,
    });
  }, [categoryId]);

  useEffect(() => {
    getDocument<BillboardType | null>(
      "billboards",
      category?.billboard,
      setBillboard
    );
  }, [category]);

  if (!categoryId || !category) {
    return null;
  }
  console.log(billboard)
  return (
    <div className="bg-white">
      <Container>
        {billboard && billboard !== undefined && <Billboard data={billboard} />}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          </div>
          <ProductList title={`Our ${category.name}`} items={products} />
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;