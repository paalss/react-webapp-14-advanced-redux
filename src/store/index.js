import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartVisibility = { visibility: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartVisibility,
  reducers: {
    toggle(state) {
      state.visibility = !state.visibility;
    },
  },
});

const initialCartState = {
  items: [
    {
      title: "test",
      quantity: 3,
      price: 6,
      total: 18,
    },
    {
      title: "test2",
      quantity: 1,
      price: 7,
      total: 7,
    },
  ],
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    increase() {},
    decrease() {},
    add() {},
    remove() {},
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartItems: cartItemsSlice.reducer },
});

export const cartVisibilityActions = cartSlice.actions;
export const cartItemsActions = cartSlice.actions;

export default store;
