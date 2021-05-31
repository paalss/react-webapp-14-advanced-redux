import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartVisibility = {visibility: false};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartVisibility,
  reducers: {
    toggle(state) {
      state.visibility = !state.visibility;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
