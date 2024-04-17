type Manufacturer = {
  id: number;
  name: string;
};

type FoodMart = {
  id: number;
  name: string;
  location: string;
  note: string;
};

type Category = {
  id: number;
  name: string;
};

type Price = {
  amount: string;
};

export type Review = {
  content: string | undefined;
  rating: number;
  title: string | undefined;
};

type PriceType = {
  amount: number;
};

export type ProductParams = {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
};

export type ProductState = {
  totalCount: number;
  products: Product[];
  loading: boolean;
  error: string | null;
};

export type Product = {
  id: number;
  name: string;
  manufacturer: Manufacturer;
  food_mart: FoodMart;
  categories: Category[];
  prices: Price[];
  reviews: Review[];
};

export type ProductIntialType = {
  id?: number;
  name: string;
  manufacturer?: Manufacturer;
  food_mart?: FoodMart;
  categories?: Category[];
  prices: PriceType[];
};

export const PRODUCY_INTIAL_VALUES: ProductIntialType = {
  id: undefined,
  name: '',
  categories: undefined,
  manufacturer: undefined,
  food_mart: undefined,
  prices: [{ amount: 0 }],
};

export type FetchProductsParams = {
  page?: number;
  perPage?: number;
  search?: string;
  categories?: number[];
  foodMarts?: number[];
};

export type CreateProductParams = {
  food_mart_id?: number;
  manufacturer_id?: number;
  name: string;
  prices_attributes?: [{ amount?: number | string }];
  category_ids?: number[];
};

export type HandleOnFilterProps = {
  productsPerPage?: number;
  searchProductTerm?: string;
};
