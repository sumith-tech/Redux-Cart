import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { showcart: false };

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showcartHandler(state) {
      state.showcart = !state.showcart;
    },
  },
});
export const cartAction = CartSlice.actions;
export default CartSlice;
