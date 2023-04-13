import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Product from "./Product";
import productsApi from "./productsApi";
import { RootState } from "..";

interface ProductState {
  products: Array<Product>;
}

const initialState: ProductState = {
  products: [],
};

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProductsThunk",
  async () => {
    let response = await productsApi.fetchProducts();
    return response.data;
  }
);

const productsSlice: any = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProduct(state: ProductState, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    sayHello() {
      console.log("Hey Man");
    },
  },

  extraReducers(builder) {
    builder.addCase(
      fetchProductsThunk.fulfilled,
      (state: ProductState, action) => {
        state.products = action.payload;
      }
    );
  },
});

export const selectProducts = (state: RootState) => state.productReducer;

export const { addProduct, sayHello } = productsSlice.actions;
export default productsSlice.reducer;
