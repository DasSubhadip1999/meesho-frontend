import { configureStore } from "@reduxjs/toolkit";
import authReduder from "../feature/auth/authSlice";
import feedbackReducer from "../feature/sellerFeedback/feedbackSlice";

export const store = configureStore({
  reducer: {
    auth: authReduder,
    feedback: feedbackReducer,
  },
});
