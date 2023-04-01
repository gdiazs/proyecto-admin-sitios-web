import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "./Product";

interface ProductState {
  products: Array<Product>;
}

const initialState: ProductState = {
  products: [],
};

const productsSlice: any = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProduct: (state: ProductState, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
