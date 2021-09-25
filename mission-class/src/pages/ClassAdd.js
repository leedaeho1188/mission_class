import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LeftOutlined } from "@ant-design/icons";
import {themeColor, lightColor, darkColor} from '../shared/color'
import ClassAdd1 from '../components/ClassAdd1';
import ClassAdd2 from '../components/ClassAdd2';
import { setPreview,setTeacherImgPreview, api as classActions } from '../redux/modules/class';

const ClassAdd = React.memo(() => {
  const [classLocOption, setClassLocOption] = useState(false);
  const [classCtgOption, setClassCtgOption] = useState(false);
  const [classDayOption, setClassDayOption] = useState(false);
  const [classDay, setClassDay] = useState("");
  const [classLoc, setClassLoc] = useState("");
  const [classCtg, setClassCtg] = useState("");
  const [className, setClassName] = useState("");
  const [classIntroduce, setClassIntroduce] = useState("");
  const [Image, setImage] = useState(false);
  const [page, setPage] = useState(1);
  const [teacherImg, setTeacherImg] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [availableCnt, setAvailableCnt] = useState();

  const startTime = useRef();
  const endTime = useRef();

  const dispatch = useDispatch();

  React.useEffect(() => {
    return() => {
      dispatch(setPreview(null));
      dispatch(setTeacherImgPreview(null));
    }
  }, [])

  const changeClassName = (e) => {
    if(e.target.value.length > 40){
      return;
    }
    setClassName(e.target.value);
  }

  const changeClassIntroduce = (e) => {
    if(e.target.value.length > 1000){
      return;
    }
    setClassIntroduce(e.target.value);
  }

  const changeTeacherName = (e) => {
    setTeacherName(e.target.value);
  }

  const changeAvailableCnt = (e) => {
    setAvailableCnt(e.target.value)
  }

  const AddClass = () => {

    if(startTime.current.value.split(':')[0] >= endTime.current.value.split(':')[0]){
      alert('수업 시작 시간이 끝나는 시간보다 늦으면 안됩니다.')
      return
    }

    const classInfo = {
      category: classCtg,
      classTitle: className,
      classIntroduce: classIntroduce,
      classPicture: Image,
      classPlace: classLoc,
      classDay: classDay,
      classStartTime: startTime.current.value,
      classEndTime: endTime.current.value,
      teacherName: teacherName,
      teacherImg: teacherImg,
      availableCnt: availableCnt,

    }
    dispatch(classActions.AddClass(classInfo))
  }

  return(
    <React.Fragment>
      <ClassAddContainer>
        <ClassAddBox>
          {page !== 1?
            <LeftOutlined
              style={{
                color: "black",
                fontSize: "16px",
                marginLeft:'5px',
                position: "absolute",
                top: "18px",
              }}
              onClick={()=> {setPage(page - 1)}}
            />
          :
            null
          }
          <ClassAddHeader>
            수업 추가
          </ClassAddHeader>
          {page === 1? 
            <ClassAdd1 
              classLocOption={classLocOption} 
              classCtgOption={classCtgOption}
              setClassLocOption={setClassLocOption}
              setClassCtgOption={setClassCtgOption}
              classLoc={classLoc}
              classCtg={classCtg}
              setClassCtg={setClassCtg}
              setClassLoc={setClassLoc}
              changeClassName={changeClassName}
              changeClassIntroduce={changeClassIntroduce}
              className={className}
              classIntroduce={classIntroduce}
              setImage={setImage}
              Image={Image}
              setPage={setPage}
            />
          :
          null
          }
          {page === 2? 
            <ClassAdd2
              startTime={startTime}
              endTime={endTime}
              classDayOption={classDayOption}
              setClassDayOption={setClassDayOption}
              classDay={classDay}
              setClassDay={setClassDay}
              setTeacherImg={setTeacherImg}
              teacherImg={teacherImg}
              teacherName={teacherName}
              setTeacherName={setTeacherName}
              changeTeacherName={changeTeacherName}
              AddClass={AddClass}
              availableCnt={availableCnt}
              changeAvailableCnt={changeAvailableCnt}
            />
          :
          null}
        </ClassAddBox>
      </ClassAddContainer>
    </React.Fragment>
  )
})

const ClassAddContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ClassAddBox = styled.div`
  width:100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  padding: 0px 30px;
  box-sizing: border-box;
  position: relative;
`

const ClassAddHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
`

const ClassAddBody = styled.div`
  display: flex;
  flex-direction: column;
`

const ClassName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const ClassLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`

const ClassNameInput = styled.input`
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 42px;
  padding: 0px 15px;
  font: normal normal normal 13px/19px Noto Sans CJK KR;
  border: none;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  outline: none;
  opacity: 0.8;
  box-sizing: border-box;
  z-index:5
`

const ClassIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const ClassIntroduceInput = styled.textarea`
  position: relative;
  width:100%;
  outline:none;
  border: none;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 0.8;
  height: 110px;
  padding: 11px 15px;
  font: normal normal normal 13px/19px Noto Sans CJK KR;
  box-sizing: border-box;
  resize: none;
  z-index: 5;
`

const ClassSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border: 1px solid ${themeColor};
  padding: .8em 1em;
  font-size: 14px;
  // border-radius:5px;
  cursor: pointer;
  box-sizing: border-box;
  // background: #F5F5F5 0% 0% no-repeat padding-box;
`

const ClassSelectBox = styled.div`
  display:flex;
  flex-direction: column;
  width: 48%;
  margin-top:20px;
  position: relative;
`

const ClassOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  // box-shadow: 0px 0px 20px #00000026;
  position: absolute;
  background-color: white;
  width: 100%;
  left: 0;
  top: 40px;
  z-index: 10;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
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

const ClassImgBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ClassNameCount = styled.div`
  position:absolute;
  top: 12px;
  right: 12px;
  font: normal normal normal 12px/18px Noto Sans CJK KR;
`

const ClassIntroduceCount = styled.div`
  position: absolute;
  bottom:12px;
  right: 12px;
  font: normal normal normal 12px/18px Noto Sans CJK KR;
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
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;

`

export default ClassAdd;