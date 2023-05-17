import { configureStore } from "@reduxjs/toolkit";
import { sneakersReducer } from "./slices/sneakersSlice";

export const store = configureStore({
  reducer: {
    sneakersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
