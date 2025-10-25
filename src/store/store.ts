// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../slices/navMenuSlice'; 
import portfolioReducer from '../slices/portfolioSlices'; 
const store = configureStore({
  reducer: {
    nav: navReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;