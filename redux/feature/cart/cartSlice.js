import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartService, getCartItemsService } from "./cartService";
import { deleteCartItemService } from "../cart/cartService";

const initialState = {
  allCartItems: [],
  cart: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const getCartItems = createAsyncThunk(
  "cart/get",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    //console.log("thunk", token);
    try {
      return await getCartItemsService(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      thunkAPI.rejectWithValue(message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/add",
  async (productId, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await addToCartService(productId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async (cartId, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await deleteCartItemService(cartId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // console.log("slice", action.payload);
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //console.log("slice", action.payload);
        state.allCartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
