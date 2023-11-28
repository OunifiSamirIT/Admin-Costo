
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Update the path

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
