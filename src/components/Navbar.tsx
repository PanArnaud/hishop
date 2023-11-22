import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocuments } from "../lib/queries";
import { Category } from "../types/Category";
import Container from "./Container";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarAction";

const Navbar = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getDocuments<Category>("categories", setCategories);
  }, []);

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:-x8 flex h-16 items-center">
          <Link to="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">HiShop</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
