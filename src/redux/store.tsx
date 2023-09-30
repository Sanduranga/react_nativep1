import {configureStore} from '@reduxjs/toolkit';
import logingReducer from './slices/loginSlice';
import {itemsReducer} from './slices/itemsSlice';

const store = configureStore({
  reducer: {
    logData: logingReducer,
    fetchItems: itemsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
