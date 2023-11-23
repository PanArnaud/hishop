import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Gallery from "../../components/Gallery";
import Info from "../../components/Info";
import { getSnapshot } from "../../lib/queries";
import { Product } from "../../types/Product";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  // const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);

  useEffect(() => {
    getSnapshot<Product | null>("products", productId, setProduct);
  }, [productId]);

  // useEffect(() => {
  //   if (product) {
  //     getSnapshots<Product>("products", setSuggestedProducts, {
  //       property: "category",
  //       value: product.category,
  //     });
  //   }
  // }, [product]);

  if (!productId || !product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          {/* <hr className="my-10" /> */}
          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
