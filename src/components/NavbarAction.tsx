import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import Button from "./Button";

const NavbarActions = () => {
  const cart = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (searchParams.get("success") === "1" && cart.items.length > 0) {
      cart.removeAll();
      toast.success("Your order has been validated");
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => navigate("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
