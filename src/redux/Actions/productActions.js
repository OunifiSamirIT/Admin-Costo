import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addProduct = createAsyncThunk('product/addProduct', async (formData) => {
    try {
      const response = await axios.post('https://admin-costo-backend-production.up.railway.app/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
    
  });

  export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
      const response = await axios.get('https://admin-costo-backend-production.up.railway.app/api/product');
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId, { rejectWithValue }) => {
      try {
        const response = await fetch(`https://admin-costo-backend-production.up.railway.app/api/product/${productId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
  
        return productId;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
