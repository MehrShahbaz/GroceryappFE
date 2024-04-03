import { Review } from '../types/productTypes';

export const func1 = (): null => null;

export const calculateReview = (data: Review[]): number | string => {
  if (data.length) {
    console.log(data);

    return 0;
  }

  return 'None';
};
