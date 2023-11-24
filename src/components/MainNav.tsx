import { Link, useLocation } from "react-router-dom";
import { sortBy } from "../lib/utils";
import { Category } from "../types/Category";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const { pathname } = useLocation();

  const routes = data.map((category: Category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes
        .concat()
        .sort(sortBy("label"))
        .map((category) => (
          <Link
            key={category.href}
            to={category.href}
            className={`text-sm font-medium transition-colors hover:text-black",
            ${category.active ? "text-black" : "text-neutral-500"}`}
          >
            {category.label}
          </Link>
        ))}
    </nav>
  );
};

export default MainNav;
