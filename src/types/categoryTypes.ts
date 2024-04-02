export type CategoryParams = {
  name: string;
};

type CategoryProduct = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  products: CategoryProduct[];
  createdAt: Date;
};

export type CategoryState = {
  categories: Category[];
  loading: boolean;
  error: string | null;
};

export type CreateCategoryType = {
  name: string;
};
