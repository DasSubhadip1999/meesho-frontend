import { configureStore } from "@reduxjs/toolkit";
import authReduder from "../feature/auth/authSlice";
import feedbackReducer from "../feature/sellerFeedback/feedbackSlice";
import productReducer from "../feature/product/productSlice";
import cartReducer from "../feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReduder,
    feedback: feedbackReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
