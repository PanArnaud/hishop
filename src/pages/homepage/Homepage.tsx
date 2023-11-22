import { useEffect, useState } from "react";
import Billboard from "../../components/Billboard";
import Container from "../../components/Container";
import ProductList from "../../components/ProductList";
import { getSnapshots } from "../../lib/queries";
import { Billboard as BillboardType } from "../../types/Billboard";
import { Product } from "../../types/Product";

const Homepage = () => {
  const [billboards, setBillboards] = useState<BillboardType[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getSnapshots<BillboardType>("billboards", setBillboards);
    getSnapshots<Product>("products", setProducts, {property: "isFeatured", value: true});
  }, []);

  if (billboards.length === 0 &&  products.length === 0) {
    return null;
  }

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards[0]} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
