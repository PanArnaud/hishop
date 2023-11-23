import { MouseEventHandler, useState } from "react";
import { Product } from "../types/Product";
import Button from "./Button";
import Currency from "./Currency";
import OptionPicker from "./OptionPicker";
import { ShoppingCart } from "lucide-react";
import useCart from "../hooks/useCart";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  const cart = useCart();
  const defaultValue: { [key: string]: string | number | null } = {};
  Object.keys(data.options).map((option) => {
    defaultValue[option] = Object.create(data.options)[option][0];
  });
  const [selection, setSelection] = useState<{
    [key: string]: string | number | null;
  }>(defaultValue);

  const changeSelection = (option: string, value: string | number) => {
    setSelection((selection) => ({
      ...selection,
      ...{
        [option]: value,
      },
    }));
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem({...data, ...{ options: selection}});
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <OptionPicker
        data={data}
        selection={selection}
        selectionUpdateHandler={changeSelection}
      />
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={addToCart} className="flex items-center gap-x-2">
          Add to cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
