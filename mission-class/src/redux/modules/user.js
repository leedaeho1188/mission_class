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

const UpdateUserProfile = (profile) => {
  return function (dispatch, getState){
    const _image = getState().user.preview;
    const _profileImg = getState().user.user.profileImg;
    const is_first = getState().user.user.fisrt;

    if(_image !== _profileImg) {
      const formData = new FormData();
      formData.append('profileImg', profile.profileImg);
      formData.append('name', profile.name);
      formData.append('nickname', profile.nickname);
      formData.append('churchName', profile.churchName);
      formData.append('churchDuty', profile.churchDuty);
      formData.append('job', profile.job);
      formData.append('phoneNumber', profile.phoneNumber);
      formData.append('introduce', profile.introduce);
      axios
        .patch(`/auth/user`, formData)
        .then((res) => {
          console.log(res.data)
          alert('회원가입을 축하드립니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    } else{
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('nickname', profile.nickname);
      formData.append('churchName', profile.churchName);
      formData.append('churchDuty', profile.churchDuty);
      formData.append('job', profile.job);
      formData.append('phoneNumber', profile.phoneNumber);
      formData.append('introduce', profile.introduce);
      axios
        .patch(`/auth/user`, formData)
        .then((res) => {
          console.log(res.data)
          alert('회원가입을 축하드립니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }
}

export const {
  setUser,
  setPreview,
} = userSlice.actions;

export const api = {
  SocialLogin,
  LoginCheck,
  UpdateUserProfile,
};

export default userSlice.reducer;