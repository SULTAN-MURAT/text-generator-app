import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./texts/textSlice";

export const store = configureStore({
  reducer: {
    texts: textReducer,
  },
});
