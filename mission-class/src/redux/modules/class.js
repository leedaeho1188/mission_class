import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {history} from "../configStore";

const classSlice = createSlice({
  name: "class",
  initialState: {
    preview: null,
  },
  reducers: {
    setPreview:(state, action) => {
      state.preview = action.payload;
    }
  }
});



export const {
  setPreview
} = classSlice.actions;

export const api = {

};

export default classSlice.reducer;

