
import { configureStore  } from '@reduxjs/toolkit';
import authReducer from './Reducer/authSlice'; 
import productReducer from './Reducer/productSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
