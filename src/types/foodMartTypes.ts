export type FoodMartParams = {
  name: string;
};

export type FoodMart = {
  id: number;
  name: string;
  location: string;
  note: string;
};

export type FoodMartState = {
  foodMarts: FoodMart[];
  loading: boolean;
  error: string | null;
};

export type CreateFoodMartType = {
  name: string;
  location: string;
};
