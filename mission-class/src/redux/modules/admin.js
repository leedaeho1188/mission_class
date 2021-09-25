import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {consoleLog} from '../../shared/consoleLog'
import { history } from "../configStore";
import { setCookie, getCookie } from '../../shared/Cookie';

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminRequest:[],
    classRequest:[],
    accept:[]
  },

  reducers: {
    setAdminRequest: (state, action) => {
      state.adminRequest = action.payload;
    },

    setClassRequest: (state, action) => {
      state.classRequest = action.payload;
    },
    setAccept: (state, action) => {
      state.accept = action.payload;
    }
  }
});

const getAdminApply = () => {
  return function(dispatch, getState) {
    axios
      .get(`/manager/pending`)
      .then((res) =>{
        dispatch(setAdminRequest(res.data.waitingList))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

const getAdminAccept = () => {
  return function(dispatch, getState){
    axios
      .get(`/manager`)
      .then((res) => {
        dispatch(setAccept(res.data.approveInfo));
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const getClassRequest = () => {
  return function(dispatch) {
    axios
      .get('lesson/apply/pending')
      .then((res) => {
        console.log(res);
        dispatch(setClassRequest(res.data.items));
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const acceptAdminApply = (userId) => {
  return function(dispatch){
    axios
      .post(`/manager/approve/${userId}`)
      .then((res) => {
        // console.log(res)
        dispatch(getAdminApply())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const acceptClassApply = (classId) => {
  return function(dispatch) {
    axios
      .post(`lesson/register/${classId}/approve`)
      .then(() => {
        dispatch(getClassRequest())
      })
      .catch((err)=> {
        console.log(err)
      })
  }
}

const denyAdminApply = (userId) => {
  return function(dispatch, getState){
    axios
      .delete(`/manager/reject/${userId}`)
      .then((res) => {
        console.log(res);
        dispatch(getAdminApply())
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

const denyClassApply = (classId) => {
  return function(dispatch){
    axios
      .delete(`/lesson/register/${classId}/cancel`)
      .then((res) => {
        dispatch(getClassRequest())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const {
  setAdminRequest,
  setAccept,
  setClassRequest,
} = adminSlice.actions;

export const api = {
  getAdminApply,
  acceptAdminApply,
  denyAdminApply,
  getAdminAccept,
  getClassRequest,
  denyClassApply,
  acceptClassApply
};

export default adminSlice.reducer;
