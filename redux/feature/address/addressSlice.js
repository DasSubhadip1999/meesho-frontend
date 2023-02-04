import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAddressService, getAddressService } from "./addressService";

const initialState = {
  address: {},
  addresses: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
  type: "",
};

export const addAddress = createAsyncThunk(
  "address/add",
  async (address, thunkAPI) => {
    //console.log(123);
    let token = thunkAPI.getState().auth.user.token;
    console.log("slice", address, token);
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
    let token = thunkAPI.getState().auth.user.token;
    //console.log("token", token);
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
      state.type = "";
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
        state.type = "address/add";
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.type = "address/add";
      })
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload;
        state.isSuccess = true;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
