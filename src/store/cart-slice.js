import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    //> bruke action for å hente opp parameter
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      state.totalQuantity++
      //> husk ikke muter state uten redux toolkit. Redux toolkit forhindrer at det faktisk manipuleres
      if (!existingItem) {
        // hvis element ikke eksiterer i cart, legg til
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // hvis element finnes i cart, øk kvantiteten
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      console.log("current(state): ", current(state));
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;