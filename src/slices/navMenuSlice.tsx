// src/slices/navMenuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface navState {
  isNavOpen: boolean;
  testimonialsIndex: number
}

const initialState: navState = {
  isNavOpen: false,
  testimonialsIndex: 0,
};

const navState = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    RsetToggleNav: (state, action: PayloadAction<boolean>) => {
      state.isNavOpen = !action.payload;
    }, 
    RsetAddIndex: (state, action: PayloadAction<number>) => {
      state.testimonialsIndex = action.payload ;
    },
  },
});

export const { RsetToggleNav , RsetAddIndex } = navState.actions;
export const selectToggleNav = (state: RootState) => state.nav.isNavOpen;
export const selectAddIndex = (state: RootState) => state.nav.testimonialsIndex

export default navState.reducer;
