import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

function priceToCents(price: string): string {
  return price.replace(".", "");
}

function capitalizeFirstLetter(input: string | number): string | number {
  if (typeof input === "string") {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  return input;
}

const sortBy = (
  by: string
): ((
  a: {
    [key: string]: string | number | boolean;
  },
  b: {
    [key: string]: string | number | boolean;
  }
) => 0 | 1 | -1) => {
  return (
    a: { [key: string]: string | number | boolean },
    b: { [key: string]: string | number | boolean }
  ) => (a[by] > b[by] ? 1 : b[by] > a[by] ? -1 : 0);
};

export { capitalizeFirstLetter, cn, priceToCents, sortBy };
