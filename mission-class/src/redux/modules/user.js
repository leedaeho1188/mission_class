import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {consoleLog} from '../../shared/consoleLog'
import { history } from "../configStore";

axios.defaults.baseURL = "http://54.180.139.155:27017";


const userSlice = createSlice({
  name: "user",
  initialState: {
    is_login: false,
    user:{
      
    },

  },
  reducers: {

  },
});

const SocialLogin = (code) => {
  return function(dispatch, getState){
    axios
      .get(`/auth/kakao`)
      .then((response) => {
        consoleLog(response);
        history.replace('/');
      })
      .catch((err)=>{
        consoleLog(err);
      })
  }
}

export const {

} = userSlice.actions;

export const api = {
  SocialLogin,

};

export default userSlice.reducer;