// import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import { addLocalStoage, getLocalStorage } from "../../utils/helpers/helpers";

function loadApp() {
  if (getLocalStorage("users")) {
    return getLocalStorage("users");
  }
  return [];
}
function loadAppTwo() {
  if (getLocalStorage("vyhod")) {
    return getLocalStorage("vyhod");
  }
  return [];
}

const initialState = {
  list: loadApp(),
  listTwo: loadAppTwo(),
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
    removeItemTwo: (state, action) => {
      state.listTwo = state.listTwo.filter(
        (elem) => elem.id !== action.payload.id
      );
      addLocalStoage("vyhod", state.listTwo);
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
    editItemTwo: (state, action) => {
      console.log(action.payload.id);
      state.listTwo = state.listTwo.map((elem) => {
        if (elem.id === action.payload.id) {
          return action.payload;
        }
        return elem;
      });
      addLocalStoage("vyhod", state.list);
    },
    setListTwo: (state, action) => {
      state.list = state.list.filter((elem) => elem.id !== action.payload.id);
      addLocalStoage("users", state.list);
      state.listTwo.unshift(action.payload);
      addLocalStoage("vyhod", state.listTwo);
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
