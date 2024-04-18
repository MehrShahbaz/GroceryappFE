/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'react-notifications-component';
import { FoodMart } from 'types/foodMartTypes';

import { CategoryType } from '../types/categoryTypes';
import { PriceType, ReviewType } from '../types/productTypes';

export const EUR_SYMBOL = '€';

type ErrorType = {
  error: string;
  exception: string;
  status: number;
};

export const calculateReview = (data: ReviewType[]): number => {
  if (data.length) {
    const sum = data.reduce((accumulator, { rating }) => accumulator + rating, 0);
    const average = sum / data.length;

    return average;
  }

  return 0;
};

export const calculateAveragePrice = (data: PriceType[]): string => {
  if (data.length) {
    const sum = data.reduce((accumulator, { amount }) => accumulator + amount, 0);
    const average = sum / data.length;

    return `${EUR_SYMBOL}${average.toFixed(2)}`;
  }

  return `${EUR_SYMBOL}0`;
};

export type SelectType = {
  value: number;
  label: string;
};

export const convertListSelectable = (list: CategoryType[]): SelectType[] =>
  list.map(({ id, name }) => ({ value: id, label: name }));

export const splitCategoryArrayIntoChunks = (array: CategoryType[], chunkSize: number): CategoryType[][] => {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);

    chunks.push(chunk);
  }

  return chunks;
};

export const splitFoodMartsArrayIntoChunks = (array: FoodMart[], chunkSize: number): FoodMart[][] => {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);

    chunks.push(chunk);
  }

  return chunks;
};

type ShowNotificationProps = {
  title: string;
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
  message: string;
  duration?: number;
};

export const showNotification = ({ title, type, message, duration }: ShowNotificationProps): void => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: duration ?? 2000,
      onScreen: true,
    },
  });
};

export const errorNotification = (err: any, duration?: number): void => {
  if (err.response) {
    const data: ErrorType = err.response.data;

    showNotification({ title: data.error || 'Error', type: 'danger', message: data.exception || 'Error', duration });
  } else {
    throw err;
  }
};
