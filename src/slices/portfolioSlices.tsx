// src/slices/portfolioSlices.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface ActiveProduct {
  title: string;
  subtitle: string;
  image: string;
}

interface PortfolioState {
  isModalOpen: boolean;
  activeProduct: ActiveProduct
}

const initialState: PortfolioState = {
  isModalOpen: false,
  activeProduct: {
    title: "App",
    subtitle: "Lorem ipsum dolor sit amet consectetur",
    image: "books-1.jpg",
  },
};

const portfolioState = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    RsetToggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = !action.payload;
    },
    RsetActiveProduct: (state, action: PayloadAction<ActiveProduct>) => {
      state.activeProduct =action.payload;
    },
  },
});

export const { RsetToggleModal, RsetActiveProduct } = portfolioState.actions;
export const selectToggleModal = (state: RootState) =>
  state.portfolio.isModalOpen;
export const selectActiveProduct = (state: RootState) =>
  state.portfolio.activeProduct;

export default portfolioState.reducer;
