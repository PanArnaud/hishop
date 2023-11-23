import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "../types/Product";
import { Category } from "../types/Category";
import { useNavigate } from "react-router-dom";
import IconButton from "./IconButton";
import Currency from "./Currency";
import { MouseEventHandler } from "react";
import PreviewModal from "./PreviewModal";
import usePreviewModal from "../hooks/usePreviewModal";

interface ProductCardProps {
  data: Product;
  categories: Category[];
}

const ProductCard = ({ data, categories }: ProductCardProps) => {
  const navigate = useNavigate();
  const previewModal = usePreviewModal();

  const category = categories.filter((category) => {
    return category.id === data.category;
  })[0];

  const handleClick = () => {
    navigate(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={() => {}}
            />
          </div>
        </div>
        <img
          src={data?.images?.[0].url}
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
