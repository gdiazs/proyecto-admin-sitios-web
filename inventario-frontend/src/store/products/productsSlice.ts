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

export const removeItemThunk = createAsyncThunk(
  "products/removeItemThunk",
  async (id: string) => {
    let response = await productsApi.removeItem(id);
    return response.data;
  }
);

const productsSlice: any = createSlice({
  name: "products",
  initialState,

  reducers: {
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

    builder.addCase(
      removeItemThunk.fulfilled,
      (state: ProductState, action: PayloadAction<Product>) => {

        let productFound: Product = state.products.filter(
          (product: Product) => product.id === action.payload.id
        )[0];
        
        productFound.quantity = action.payload.quantity;
      }
    );
  },
});

export const selectProducts = (state: RootState) => state.productReducer;

export const { removeItem, sayHello } = productsSlice.actions;
export default productsSlice.reducer;
