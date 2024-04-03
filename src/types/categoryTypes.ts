export type CategoryParams = {
  name: string;
};

type CategoryProduct = {
  id: number;
  name: string;
};

export type CategoryType = {
  id: number;
  name: string;
  products: CategoryProduct[];
  createdAt: Date;
};

export type CategoryState = {
  categories: CategoryType[];
  loading: boolean;
  error: string | null;
};

export type CreateCategoryType = {
  name: string;
};
