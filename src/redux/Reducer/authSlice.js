import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const storedUser = JSON.parse(localStorage.getItem('user'));

if (storedUser) {
  initialState.user = storedUser;
}

export const registerUser = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post('http://localhost:5000/api/auth/register', userData);
  return response.data;
});

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
    return response.data;
  });

  export const logoutUser = createAsyncThunk('auth/logout', async () => {
 
    await axios.post('http://localhost:5000/api/auth/logout');
  });

  
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   //register
    .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

//login
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'idle';
        state.user = null;
        localStorage.removeItem('user');
      });
  },
});
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
