import { createSlice } from "@reduxjs/toolkit";

const initialCartFunctionstate = { items: [], totalQuantity: 0 };

const cartFunctionSlice = createSlice({
  name: "cartfunction",
  initialState: initialCartFunctionstate,
  reducers: {
    fetchCart(state, action) {
      state.items = action.payload;
    },

    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id === item.id);
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalprice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newItem.price;
      }
    },
    removefromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id === item.id);
      if (newItem.quantity == 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - newItem.price;
      }
    },
  },
});
export default cartFunctionSlice;
export const cartfunctionAction = cartFunctionSlice.actions;
