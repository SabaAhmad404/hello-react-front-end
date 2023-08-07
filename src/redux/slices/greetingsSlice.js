import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  loading: false,
  error: '',
};

export const fetchGreeting = createAsyncThunk('fetchGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/random_greeting');
  const { data } = response;
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
      ...state,
      greeting: action.payload,
      loading: false,
    }));
    builder.addCase(fetchGreeting.rejected, (state) => ({
      ...state,
      error: 'Error fetching greeting',
      loading: false,
    }));
  },
});

export default greetingsSlice.reducer;
