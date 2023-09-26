import {configureStore} from '@reduxjs/toolkit';
import logingReducer from './slices/loginSlice';

const store = configureStore({
  reducer: {
    logData: logingReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
