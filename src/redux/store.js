import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/MovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
