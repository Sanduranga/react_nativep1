import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchData = createAsyncThunk('gallery/fetchImages', async () => {
  let pageNo = 1;
  const result = await axios.get(
    `https://picsum.photos/v2/list?limit=12&page=${pageNo}`,
  );
  return result.data;
});

interface initialtypes {
  items: [];
  loading: boolean;
  error?: string;
  cart: [];
}
const initialState: initialtypes = {
  items: [],
  loading: false,
  error: '',
  cart: [],
};
const itemsSlice = createSlice({
  name: 'fetchItems',
  initialState,
  reducers: {
    buyThis: (state, action: PayloadAction<{}>) => {
      state.cart.unshift(action.payload);
    },
    dropThis: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (item: {price: number; image: string; id: string}) =>
          item.id !== action.payload,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const itemsReducer = itemsSlice.reducer;
export const {buyThis, dropThis} = itemsSlice.actions;
