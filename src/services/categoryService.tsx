import { AxiosPromise } from 'axios';

import { CategoryParams } from '../types/categoryTypes';

import baseService from './baseService';
import { categoryURLS } from './urls';

export const getAllCategoriesService = (): AxiosPromise => baseService.get(categoryURLS.getAllCategories);

export const createCategoryService = (params: CategoryParams): AxiosPromise =>
  baseService.post(categoryURLS.createCategory, params);

export const updateCategoryService = (params: CategoryParams, id: number): AxiosPromise =>
  baseService.put(categoryURLS.updateCategory(id), params);

export const deleteCategoryService = (id: number): AxiosPromise => baseService.delete(categoryURLS.updateCategory(id));
