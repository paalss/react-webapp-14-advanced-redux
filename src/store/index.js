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
      id: "p1",
      title: "test",
      quantity: 3,
      price: 6,
      total: 18,
    },
  ],
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItems,
  reducers: {
    increase(state, action) {
      console.log("state: ", current(state.items));
      // console.log("action.payload: ", action.payload);
      const newItemId = action.payload.id;
      const existingItem = state.items.find((x) => x.id === newItemId);
      if (existingItem) {
        if (newItemId === existingItem.id) {
          console.log(true);
        }
      } else {
        state.items.push({
          title: action.payload.title,
          price: action.payload.price,
          description: action.payload.description,
          total: 0,
        });
      }
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
