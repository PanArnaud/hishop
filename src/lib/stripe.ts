import { loadStripe } from "@stripe/stripe-js";
import { httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";
import { functions } from "../firebase";
import { Product } from "../types/Product";
import { priceToCents } from "./utils";

const createStripeCheckout = httpsCallable(functions, "createStripeCheckout");

const createStripeSession = (
  items: Product[],
  loadingStateSetter: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string).then(
    (stripe) => {
      loadingStateSetter(true);
      createStripeCheckout({
        cancel_url: "/cart",
        line_items: items.map((item) => ({
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: parseFloat(priceToCents(item.price)),
            product_data: {
              name: item.name,
            },
          },
        })),
      })
        .then((response) => {
          stripe?.redirectToCheckout({
            sessionId: (response.data as { id: string }).id,
          });
        })
        .catch(() => {
          toast.error("An error occured");
          loadingStateSetter(false);
        });
    }
  );
};

export { createStripeSession };
