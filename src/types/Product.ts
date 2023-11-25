export type Product = {
  id: string;
  category: string;
  name: string;
  price: string;
  isFeatured: boolean;
  images: { url: string }[];
  options: {
    [key: string]: ProductOption[];
  };
  selectedOptions: OptionSelection;
};

export type ProductOption = {
  [key: string]: string[] | number[] | boolean;
};

export type OptionSelection = {
  [key: string]: string | number | boolean;
};
