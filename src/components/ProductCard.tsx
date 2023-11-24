import { Expand } from "lucide-react";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import usePreviewModal from "../hooks/usePreviewModal";
import { Category } from "../types/Category";
import { Product } from "../types/Product";
import Currency from "./Currency";
import IconButton from "./IconButton";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  data: Product;
  categories: Category[];
}

const ProductCard = ({ data, categories }: ProductCardProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
  };

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
        <p className="text-sm text-gray-500">
          {t(`categories.${category?.name}`)}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
