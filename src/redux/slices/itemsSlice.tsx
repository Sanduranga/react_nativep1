import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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
}
const initialState: initialtypes = {
  items: [],
  loading: false,
  error: '',
};
const itemsSlice = createSlice({
  name: 'fetchItems',
  initialState,
  reducers: {},
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
// export const { pagePrev, pageNext } = homeItemSlice.actions;
