import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {history} from "../configStore";

const classSlice = createSlice({
  name: "class",
  initialState: {
    preview: null,
    teacherImg:null,
    classList:[],
  },
  reducers: {
    setPreview:(state, action) => {
      state.preview = action.payload;
    },
    setTeacherImgPreview:(state, action) => {
      state.teacherImg = action.payload;
    },
    setClassList:(state, action) => {
      state.classList = action.payload;
    }
  }
});


const AddClass = (info) => {
  return function(dispatch){

    const formData = new FormData();
    formData.append('category', info.category);
    formData.append('classTitle', info.classTitle);
    formData.append('classIntroduce', info.classIntroduce);
    formData.append('classPicture', info.classPicture);
    formData.append('classPlace', info.classPlace);
    formData.append('classDay', info.classDay);
    formData.append('classStartTime', info.classStartTime);
    formData.append('classEndTime', info.classEndTime);
    formData.append('teacherName', info.teacherName);
    formData.append('teacherImg', info.teacherImg);
    formData.append('availableCnt', info.availableCnt);


    axios
      .post(`/lesson/register`, formData)
      .then((res) => {
        console.log(res)
        alert('정상적으로 수업이 등록되었습니다.')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


const getClassList = () => {
  return function(dispatch){
    axios
      .get('/lesson')
      .then((res) => {
        dispatch(setClassList(res.data.classLists))
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

const getClassDetail = () => {
  
}


export const {
  setPreview,
  setTeacherImgPreview,
  setClassList
} = classSlice.actions;

export const api = {
  AddClass,
  getClassList,
};

export default classSlice.reducer;

