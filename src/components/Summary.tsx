import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useCart from "../hooks/useCart";
import { createStripeSession } from "../lib/stripe";
import Button from "./Button";
import Currency from "./Currency";

const Summary = () => {
  const { items } = useCart();
  const { t } = useTranslation();
  const [checkoutDisabled, setCheckoutDisabled] = useState<boolean>(
    items.length === 0
  );

  useEffect(() => {
    setCheckoutDisabled(items.length === 0);
  }, [items]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = (): void => {
    setCheckoutDisabled(true);
    createStripeSession(items, setCheckoutDisabled);
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        {t("cart.order-summary")}
      </h2>
      <div className="mt-6 space-y-4">
        <div className=" flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            {t("cart.order-total")}
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={checkoutDisabled}
        className="w-full mt-6"
      >
        {t('cart.checkout')}
      </Button>
    </div>
  );
};

export default Summary;
