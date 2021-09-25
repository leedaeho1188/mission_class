import React, {useRef} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { LeftOutlined } from "@ant-design/icons";
import {themeColor, lightColor, darkColor} from '../shared/color'
import TeacherImgUpload from './TeacherImgUpload';


const ClassAdd2 = (props) => {

  return(
    <React.Fragment>
      <ClassAdd2Body>
        <ClassDay>
          <ClassLabel>수업요일</ClassLabel>
          <ClassSelectBox>
            <ClassSelect onClick={() => {
              if(props.classDayOption){props.setClassDayOption(false)}
              else{props.setClassDayOption(true)}
            }} >
              {props.classDay? props.classDay : '수업 요일'}
              {props.classDayOption? 
                <LeftOutlined
                  style={{
                    color: "black",
                    fontSize: "12px",
                    transform:'rotateZ(90deg)',
                    marginLeft:'5px'
                  }}
                />
              :
                <LeftOutlined
                  style={{
                    color: "black",
                    fontSize: "12px",
                    transform:'rotateZ(270deg)',
                    marginLeft:'5px'
                  }}
                />
              }
            </ClassSelect>
            {props.classDayOption? 
              <ClassOptionBox>
                <ClassOption onClick={() => {
                  props.setClassDay("월요일");
                  props.setClassDayOption(false);
                }} >월요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("화요일");
                  props.setClassDayOption(false);
                }} >화요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("수요일");
                  props.setClassDayOption(false);
                }} >수요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("목요일");
                  props.setClassDayOption(false);
                }} >목요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("금요일");
                  props.setClassDayOption(false);
                }} >금요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("토요일");
                  props.setClassDayOption(false);
                }} >토요일</ClassOption>
                <ClassOption onClick={() => {
                  props.setClassDay("일요일");
                  props.setClassDayOption(false);
                }} >일요일</ClassOption>
              </ClassOptionBox>
            :
            null}
          </ClassSelectBox>
        </ClassDay>
        <ClassTime>
          <ClassLabel>수업시간</ClassLabel>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
            <TextField
              id="startTime"
              type="time"
              inputRef={props.startTime}
              defaultValue="00:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 60, // 5 min
              }}
              style={{width: "140px"}}
            />
            <span> ~ </span>
            <TextField
              id="endTime"
              type="time"
              inputRef={props.endTime}
              defaultValue="00:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 60, // 5 min
              }}
              style={{width: "140px"}}
            />
          </div>
        </ClassTime>

        <AvailableCnt>
          <ClassLabel for="availableCnt" >가능 인원</ClassLabel>
          <ClassInput
            id="availableCnt"
            value={props.availableCnt}
            onChange={props.changeAvailableCnt}
          />
        </AvailableCnt>
        <TeacherImg>
          <ClassLabel>선생님 사진</ClassLabel>
          <TeacherImgUpload setTeacherImg={props.setTeacherImg} />
        </TeacherImg>
        <TeacherName>
          <ClassLabel for="teacherName" >선생님 이름</ClassLabel>
          <ClassInput
            id="teacherName"
            value={props.teacherName}
            onChange={props.changeTeacherName}
          />
        </TeacherName>
        {props.startTime &&
          props.endTime &&
          props.teacherName &&
          props.teacherImg &&
          props.classDay ?
          <ClassAddBtn onClick={()=>{props.AddClass()}} >수업 추가하기</ClassAddBtn>
          :
          <ClassAddBtn style={{backgroundColor:"#757575"}} >
            수업 추가하기
          </ClassAddBtn>
        }
      </ClassAdd2Body>
    </React.Fragment>
  )
}

const ClassAdd2Body = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

const ClassTime = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

const ClassDay = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

const ClassSelectBox = styled.div`
display:flex;
flex-direction: column;
width: 60%;
position: relative;
`

const ClassSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border: 1px solid ${themeColor};
  padding: .8em 1em;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
`

const ClassOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: 100%;
  left: 0;
  top: 40px;
  z-index: 10;
  border: 1px solid ${themeColor};
  box-sizing: border-box;
`

const ClassLabel = styled.label`
font-size: 14px;
font-weight: 600;
margin-bottom: 8px;
`

const ClassOption = styled.div`
height: 40px; 
padding: .8em 1em;
font-size: 14px;
cursor: pointer;
box-sizing: border-box;
&:hover{
  background: #ECECEC;
}
`

const AvailableCnt = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
`

const TeacherName = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
`

const TeacherImg  = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  
`

const ClassInput = styled.input`
  border-radius: 10px;
  position: relative;
  // width: 100%;
  height: 42px;
  padding: 0px 15px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  outline: none;
  opacity: 0.8;
  box-sizing: border-box;
  z-index:5
`

const ClassAddBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 17px;
  // color: #FFFFFF;
  font-weight: 600;
  background-color: ${lightColor};
  margin-top: 30px;
  border-radius: 10px;
`

export default ClassAdd2