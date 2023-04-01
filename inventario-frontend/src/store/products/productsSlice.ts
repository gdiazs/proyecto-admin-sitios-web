import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "./Product";

interface ProductState {
  products: Array<Product>;
}

const initialState: ProductState = {
  products: [
    {
      productId: 1,
      productDescription: "Pequeñas",
      productName: "Sillas",
      productImageUrl: "https://placehold.co/80",
      quantity: 1,
    },
  ],
};

const productsSlice: any = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProduct: (state: ProductState, action: PayloadAction<Product>) => {
      console.log(action)
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
