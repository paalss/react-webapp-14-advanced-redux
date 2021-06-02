import { configureStore, createSlice, current } from "@reduxjs/toolkit";

// cart visiblility
const initialCartVisibility = { visibility: true };

const cartVisibilitySlice = createSlice({
  name: "cart",
  initialState: initialCartVisibility,
  reducers: {
    toggle(state) {
      state.visibility = !state.visibility;
    },
  },
});

// cart items
const initialCartItems = {
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
  initialState: initialCartItems,
  reducers: {
    increase(state, action) {
      // console.log("state: ", current(state.items));
      // console.log("action.payload: ", action.payload);
      state.items.push({
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        total: 0,
      });
    },
    decrease(state) {},
  },
});

const store = configureStore({
  reducer: {
    cart: cartVisibilitySlice.reducer,
    cartItems: cartItemsSlice.reducer,
  },
});

export const cartVisibilityActions = cartVisibilitySlice.actions;
export const cartItemsActions = cartItemsSlice.actions;

export default store;
