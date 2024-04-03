import { Review } from '../types/productTypes';

export const func1 = (): null => null;

export const calculateReview = (data: Review[]): string => {
  if (data.length) {
    const sum = data.reduce((accumulator, { rating }) => accumulator + rating, 0);
    const average = sum / data.length;

    return `${average} / 5`;
  }

  return 'None';
};
