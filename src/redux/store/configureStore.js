import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../loginRedux/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});