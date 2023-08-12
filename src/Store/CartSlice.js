import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  showcart: false,
  notification: {},
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showcartHandler(state) {
      state.showcart = !state.showcart;
    },
    notificationHandler(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cartAction = CartSlice.actions;
export default CartSlice;
