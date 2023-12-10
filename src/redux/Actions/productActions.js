import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addProduct = createAsyncThunk('product/addProduct', async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
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
      const response = await axios.get('http://localhost:5000/api/product');
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:5000/api/product/${productId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
  
        // Return the deleted product ID
        return productId;
      } catch (error) {
        // Reject with the error message
        return rejectWithValue(error.message);
      }
    }
  );
