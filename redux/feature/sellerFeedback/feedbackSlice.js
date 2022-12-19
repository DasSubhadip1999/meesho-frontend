import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeedbackService } from "./feedbackService";

const initialState = {
  feedback: null,
  feedbacks: [],
  isError: false,
  isLoading: false,
  isSucces: false,
  message: "",
};

export const getFeedback = createAsyncThunk(
  "feedback/get",
  async (_, thunkAPI) => {
    try {
      return await getFeedbackService();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      thunkAPI.rejectWithValue(message);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSucces = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.feedbacks = action.payload;
      })
      .addCase(getFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
