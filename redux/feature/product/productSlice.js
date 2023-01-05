import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getProductService,
  addProductService,
  getSellerProductsService,
  deleteProductService,
  getProductsBySearchService,
} from "./productService";

const initialState = {
  products: [],
  searchProducts: [],
  product: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  type: "",
};

export const getProduct = createAsyncThunk(
  "product/get",
  async (_, thunkAPI) => {
    try {
      return await getProductService();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (product, thunkAPI) => {
    //console.log("from slice", product);
    let token = thunkAPI.getState().auth.seller.token;
    try {
      return await addProductService(product, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProductsBySearch = createAsyncThunk(
  "products/search",
  async (searchText, thunkAPI) => {
    try {
      return await getProductsBySearchService(searchText);
    } catch (error) {
      //console.log("slice error", error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      console.log(message);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSellerProducts = createAsyncThunk(
  "sellerProduct/get",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.seller.token;

    try {
      return await getSellerProductsService(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.seller.token;

    try {
      return await deleteProductService(token, id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.type = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSellerProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSellerProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.type = "seller";
      })
      .addCase(getSellerProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.type = "seller";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.type = "seller/delete";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.type = "seller/delete";
      })
      .addCase(getProductsBySearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsBySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("slice", action.payload);
        state.searchProducts = action.payload;
        state.isSuccess = true;
        state.type = "products/search";
      })
      .addCase(getProductsBySearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log("error payload", action.payload);
        state.message = action.payload;
        state.type = "products/search";
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
