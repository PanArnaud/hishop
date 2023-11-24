import { useTranslation } from "react-i18next";
import CartItem from "../../components/CartItem";
import Container from "../../components/Container";
import Summary from "../../components/Summary";
import useCart from "../../hooks/useCart";

const CartPage = () => {
  const { t } = useTranslation();
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 lg:px-8">
          <h1 className="text-3xl font-bold text-black">
            {t("cart.your-cart")}
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">{t("cart.empty")}</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
