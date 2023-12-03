
import { configureStore  } from '@reduxjs/toolkit';
import authReducer from './Reducer/authSlice'; 
import productReducer from './Reducer/productSlice'; 
import fetchProducts from './Reducer/fetchProducts';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    fetchProduct: fetchProducts,
  },
});

export default store;
