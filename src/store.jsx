// src/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/pasteSlice";  

export const store = configureStore({
  reducer: {
    pastes: pasteReducer,
  },
});
