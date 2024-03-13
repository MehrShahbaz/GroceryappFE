import { AxiosPromise } from 'axios';

import { CategoryResponse } from '../types/categoryTypes';

import baseService from './baseService';
import { categoryURLS } from './urls';

export const getAllCategoriesService = (): AxiosPromise<CategoryResponse> =>
  baseService.get<CategoryResponse>(categoryURLS.getAllCategories);
