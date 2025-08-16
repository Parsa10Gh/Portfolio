// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../slices/navMenuSlice'; // Adjust path if needed
import portfolioReducer from '../slices/portfolioSlices'; // Adjust path if needed
const store = configureStore({
  reducer: {
    nav: navReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
