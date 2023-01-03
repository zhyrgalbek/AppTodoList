import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/authslices";
import todoSlices from "./slices/todoSlices";

const store = configureStore({
  reducer: {
    auth: authSlices.reducer,
    todo: todoSlices.reducer,
  },
});

export default store;
