export type CategoryParams = {
  name: string;
};

export type CategoryType = {
  id: number;
  name: string;
  count: number;
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
