import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import cartFunctionSlice from "./cartFunctionSlice";
const store = configureStore({
  reducer: { cart: CartSlice.reducer, cartfunction: cartFunctionSlice.reducer },
});
export default store;
