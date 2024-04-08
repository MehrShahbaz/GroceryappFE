import { CategoryType } from '../types/categoryTypes';
import { Review } from '../types/productTypes';

export const func1 = (): null => null;

export const calculateReview = (data: Review[]): string => {
  if (data.length) {
    const sum = data.reduce((accumulator, { rating }) => accumulator + rating, 0);
    const average = sum / data.length;

    return `${average.toFixed(2)} / 5`;
  }

  return 'None';
};

export type SelectType = {
  value: number;
  label: string;
};

export const convertListSelectable = (list: CategoryType[]): SelectType[] =>
  list.map(({ id, name }) => ({ value: id, label: name }));
