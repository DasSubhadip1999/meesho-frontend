import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  registerService,
  loginService,
  registerSellerService,
  loginSellerService,
} from "./authService";
import { getItemFromStorage } from "../../../assets/localstorage";

const LC_USER = getItemFromStorage("user");
const LC_SELLER = getItemFromStorage("seller");

const initialState = {
  user: LC_USER ? LC_USER : null,
  seller: LC_SELLER ? LC_SELLER : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  type: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await registerService(user);
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

export const registerSeller = createAsyncThunk(
  "auth/registerSeller",
  async (seller, thunkAPI) => {
    try {
      return await registerSellerService(seller);
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

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await loginService(user);
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

export const loginSeller = createAsyncThunk(
  "auth/loginSeller",
  async (seller, thunkAPI) => {
    try {
      return await loginSellerService(seller);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.type = "";
    },
    userLogout: (state) => {
      //console.log("user", 123);
      state.user = null;
    },
    sellerLogout: (state) => {
      //console.log("seller", 123);
      state.seller = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
        state.type = "user-register";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.type = "user-register";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.type = "user-login";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.type = "user-login";
      })
      .addCase(registerSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.seller = action.payload;
      })
      .addCase(registerSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginSeller.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.seller = action.payload;
      })
      .addCase(loginSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, userLogout, sellerLogout } = authSlice.actions;

export default authSlice.reducer;
