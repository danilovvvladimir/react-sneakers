import { configureStore } from "@reduxjs/toolkit";
import { sneakersReducer } from "./slices/sneakersSlice";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    sneakersReducer,
    filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
