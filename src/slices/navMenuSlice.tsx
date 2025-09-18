// src/slices/navMenuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface navState {
  isNavOpen: boolean;
}

const initialState: navState = {
  isNavOpen: false,
};

const navState = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    RsetToggleNav: (state, action: PayloadAction<boolean>) => {
      state.isNavOpen = !action.payload;
    }, 

  },
});

export const { RsetToggleNav } = navState.actions;
export const selectToggleNav = (state: RootState) => state.nav.isNavOpen;

export default navState.reducer;
