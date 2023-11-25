import { ShoppingCart } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import useCart from "../hooks/useCart";
import { OptionSelection, Product } from "../types/Product";
import Button from "./Button";
import Currency from "./Currency";
import OptionPicker from "./OptionPicker";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  const cart = useCart();
  const { t } = useTranslation();
  const defaultValue: OptionSelection = {};
  Object.keys(data.options).map((option: string) => {
    defaultValue[option] = Object.create(data.options)[option][0];
  });
  const [selection, setSelection] = useState<OptionSelection>(defaultValue);

  const changeSelection = (
    option: string,
    value: string | number | boolean
  ) => {
    setSelection((selection) => ({
      ...selection,
      ...{
        [option]: value,
      },
    }));
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem({ ...data, ...{ selectedOptions: selection } });
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
          {t("cart.add-to-cart")}
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
