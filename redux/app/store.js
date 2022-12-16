import { configureStore } from "@reduxjs/toolkit";
import authReduder from "../feature/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReduder,
  },
});
