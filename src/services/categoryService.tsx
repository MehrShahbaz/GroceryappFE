import { AxiosPromise } from 'axios';

import { CategoryParams } from '../types/categoryTypes';

import baseService from './baseService';
import { categoryURLS } from './urls';

export const getAllCategoriesService = (): AxiosPromise => baseService.get(categoryURLS.getAllCategories);

export const createCategoryService = (params: CategoryParams): AxiosPromise =>
  baseService.post(categoryURLS.createCategory, params);

export const updateCategoryService = (params: CategoryParams, id: string): AxiosPromise =>
  baseService.put(categoryURLS.updateCategory(id), params);
