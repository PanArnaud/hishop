import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import useCart from "../hooks/useCart";
import { Product } from "../types/Product";
import Currency from "./Currency";
import IconButton from "./IconButton";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();
  const { t } = useTranslation();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <img
          className="object-cover aspect-square object-center"
          src={data.images[0].url}
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          {data.selectedOptions !== undefined && (
            <div className="grid grid-cols-2 gap-3 mb-1 justify-between text-sm">
              {Object.keys(data?.selectedOptions).map((option: string) => (
                <div key={option}>
                  <span>{t(`options.${option}`)}</span>
                  <div key={option} className="text-gray-500">
                    {data.selectedOptions[option]}
                  </div>
                </div>
              ))}
            </div>
          )}
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
