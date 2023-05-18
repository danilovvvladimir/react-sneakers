import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState, ICartItem } from "../../models/cartTypes";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { v4 as uuidv4 } from "uuid";

const initialState: CartSliceState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      action.payload.id = uuidv4();
      state.cartItems.push(action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
