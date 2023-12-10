// features/product/productSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addProduct , deleteProduct } from '../Actions/productActions';
import axios from 'axios';




const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        // Remove the deleted product from the state
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = 'failed to delete'; // Assuming the error message is returned in the payload
      });
      ;
  },
});

export default productSlice.reducer;
