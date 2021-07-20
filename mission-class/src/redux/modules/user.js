import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {consoleLog} from '../../shared/consoleLog'
import { history } from "../configStore";
import { setCookie, getCookie } from '../../shared/Cookie';

axios.defaults.baseURL = "http://54.180.139.155";
axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
  "is_login"
)}`;

const userSlice = createSlice({
  name: "user",
  initialState: {
    is_login: false,
    user:{
      
    },
    preview: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
    },
    setPreview: (state, action)=> {
      state.preview = action.payload;
    },
  }
});

const SocialLogin = () => {
  return function(dispatch){
    axios
      .get(`/auth/user`)
      .then((res) => {
        consoleLog(res,"user.js");
        dispatch(
          setUser(res.data)
        )
        if(res.data.first){
          history.replace('/profile/update')
        }else{
          history.replace('/');
        }
      })
      .catch((err)=>{
        consoleLog(err);
      })
  }
}

const LoginCheck = () => {
  return function (dispatch){
    axios
      .get(`/auth/user`)
      .then((res) => {
        dispatch(
          setUser(res.data)
        )
      })
      .catch((err)=>{
        console.log(err);
      })
  }
}



export const {
  setUser,
  setPreview,
} = userSlice.actions;

export const api = {
  SocialLogin,
  LoginCheck,
};

export default userSlice.reducer;