import { number, object, string } from 'yup';

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
  price: number().min(0).required('Required'),
});

export const ProductPriceSchema = object().shape({
  price: number().min(0).required('Price is Required'),
});

export const ProductNameSchema = object().shape({
  name: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is Required'),
});

export const ProductReviewSchema = object().shape({
  content: string().min(2, 'Too Short!').max(50, 'Too Long!'),
  rating: number().min(0).max(5).required('Rating is Required'),
  title: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Title is Required'),
});

export const ProductManufacturerSchema = object().shape({
  manufacturer: object().shape({
    id: number().required('Manufacturer is Required'),
  }),
});
