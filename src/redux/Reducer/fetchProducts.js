// features/product/productSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../Actions/productActions';
import axios from 'axios';




const fetchProducts = createSlice({
  name: 'product',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchProducts.reducer;
