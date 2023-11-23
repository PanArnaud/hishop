import { X } from "lucide-react";
import useCart from "../hooks/useCart";
import { capitalizeFirstLetter } from "../lib/utils";
import { Product } from "../types/Product";
import Currency from "./Currency";
import IconButton from "./IconButton";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();

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
          <div className="grid grid-cols-2 gap-x-3 mb-1 justify-between text-sm">
            {Object.keys(data.options).map((option) => (
              <p className="text-gray-500">
                {capitalizeFirstLetter(option)}:{" "}
                {Object.create(data.options)[option]}
              </p>
            ))}
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
