import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/features/cart/Cartslice";
import userReducer from "./src/features/user/UserSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
