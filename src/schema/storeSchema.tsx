import { object, string } from 'yup';
export const temp = {};

export const StoreSchema = object().shape({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  location: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const ManufacturerSchema = object().shape({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const CategorySchema = object().shape({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const ProductSchema = object().shape({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
