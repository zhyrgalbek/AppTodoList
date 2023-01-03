import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoSlices";

const initialState = {
  token: "",
  name: "",
  phoneNumber: "",
  email: "",
  key: "",
};

const authSlices = createSlice({
  initialState,
  name: "authSlices",
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
    },
    setUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.key = action.payload.key;
    },
    outUser: (state) => {
      state.name = "";
      state.phoneNumber = "";
      state.email = "";
      state.key = "";
    },
  },
});

export const authActions = authSlices.actions;

export default authSlices;
