import { configureStore } from "@reduxjs/toolkit";
import authReduder from "../feature/auth/authSlice";
import feedbackReducer from "../feature/sellerFeedback/feedbackSlice";
import productReducer from "../feature/product/productSlice";
import cartReducer from "../feature/cart/cartSlice";
import orderReducer from "../feature/order/orderSlice";
import addressReducer from "../feature/address/addressSlice";

export const store = configureStore({
  reducer: {
    auth: authReduder,
    feedback: feedbackReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    address: addressReducer,
  },
});
