import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAddressService, getAddressService } from "./addressService";

const initialState = {
  address: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const addAddress = createAsyncThunk(
  "address/add",
  async (address, thunkAPI) => {
    let token = thunkAPI.getState.auth.user.token;
    try {
      return await addAddressService(address, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAddress = createAsyncThunk(
  "address/get",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState.auth.user.token;
    try {
      return await getAddressService(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.address = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
