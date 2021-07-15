import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {consoleLog} from '../../shared/consoleLog'
import { history } from "../configStore";

axios.defaults.baseURL = "http://54.180.139.155";


const userSlice = createSlice({
  name: "user",
  initialState: {
    is_login: false,
    user:{
      
    },

  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_login = true;
    },
  }
});

const SocialLogin = () => {
  return function(dispatch, getState){
    axios
      .get(`/auth/user`)
      .then((res) => {
        consoleLog(res,"user.js");
        dispatch(
          setUser({
            name: res.data.name,
            profileImg: res.data.profileImg,
            churchName: res.data.churchName,
            churchDuty: res.data.churchDuty,
            introduce: res.data.introduce,
            job: res.data.job,
            phoneNumber: res.data.phoneNumber,
            first: res.data.first,
          })
        )
        history.replace('/');
      })
      .catch((err)=>{
        consoleLog(err);
      })
  }
}

export const {
  setUser,

} = userSlice.actions;

export const api = {
  SocialLogin,

};

export default userSlice.reducer;