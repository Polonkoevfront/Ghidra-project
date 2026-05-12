import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceState, Product, Status } from '../types/types';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('http');
  },
);

const initialState: sliceState = {
  items: [],
  status: Status.LOADING,
};

const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase()
  // },
});

export const { setItems } = productSlice.actions;
export default productSlice.reducer;
