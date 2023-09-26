import {createSlice} from '@reduxjs/toolkit';

interface initialValue {
  userEmail: string;
  password: string;
}

const initialState: initialValue = {
  userEmail: '',
  password: '',
};

const logingSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    loginPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const {loginEmail, loginPassword} = logingSlice.actions;
export default logingSlice.reducer;
