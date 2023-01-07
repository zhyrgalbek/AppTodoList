// import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import { addLocalStoage, getLocalStorage } from "../../utils/helpers/helpers";

function loadApp() {
  if (getLocalStorage("users")) {
    return getLocalStorage("users");
  }
  return [];
}

const initialState = {
  list: loadApp(),
  status: "",
  showDropDown: false,
};

const todoSlices = createSlice({
  initialState,
  name: "todoSlices",
  reducers: {
    setList: (state, action) => {
      state.list.unshift(action.payload);
      addLocalStoage("users", state.list);
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((elem) => elem.id !== action.payload.id);
      addLocalStoage("users", state.list);
    },
    editItem: (state, action) => {
      state.list = state.list.map((elem) => {
        if (elem.id === action.payload.id) {
          return action.payload;
        } 
        return elem;
      });
      addLocalStoage("user", state.list);
    },
    timeout: (state, { payload }) => {
      const elem = state.list.find((elem) => elem.id === payload.id);
      if (elem) {
        state.list = state.list.filter((elem) => elem.id !== payload.id);
        state.list.unshift({ ...elem, timeout: true });
      }
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    cleanList: (state) => {
      state.list = [];
    },
    setShowDropDown: (state, action) => {
      state.showDropDown = action.payload.show;
    },
  },
});

export const todoActions = todoSlices.actions;

export default todoSlices;
