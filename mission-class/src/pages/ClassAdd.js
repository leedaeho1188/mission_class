import React, {useState} from 'react';
import styled from 'styled-components';
import {themeColor, lightColor, darkColor} from '../shared/color'
import { LeftOutlined } from "@ant-design/icons";
import ClassImgUpload from '../components/ClassImgUpload';

const ClassAdd = () => {
  const [classLocOption, setClassLocOption] = useState(false);
  const [classCtgOption, setClassCtgOption] = useState(false);
  const [className, setClassName] = useState("");
  const [classIntroduce, setClassIntroduce] = useState("");
  const [Image, setImage] = useState(false);


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

  return(
    <React.Fragment>
      <ClassAddContainer>
        <ClassAddBox>
          <ClassAddHeader>
            수업 추가
          </ClassAddHeader>
          <ClassAddBody>
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <ClassSelectBox>
                <ClassSelect onClick={() => {
              if(classLocOption){setClassLocOption(false)}
              else{setClassLocOption(true)}
              }} >
                    주최 단체
                  {classLocOption? 
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
                {classLocOption? 
                  <ClassOptionBox>
                    <ClassOption>수원 화평교회</ClassOption>
                  </ClassOptionBox>
                :null}
              </ClassSelectBox>
              <ClassSelectBox>
                <ClassSelect onClick={() => {
              if(classCtgOption){setClassCtgOption(false)}
              else{setClassCtgOption(true)}
              }} >
                    카테고리
                  {classCtgOption? 
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
                {classCtgOption? 
                  <ClassOptionBox>
                    <ClassOption>커피</ClassOption>
                  </ClassOptionBox>
                :null}
              </ClassSelectBox>
            </div>
            
            <ClassImgBox>
              <ClassLabel>수업 사진</ClassLabel>
              <ClassImgUpload setImage={setImage} />
            </ClassImgBox>

            <ClassName>
              <ClassLabel for="className" >수업 이름</ClassLabel>
              <div style={{position:"relative"}} >
                <ClassNameInput
                  id="className"
                  value={className}
                  onChange={changeClassName}
                />
                <ClassNameCount>{className.length}/40</ClassNameCount>
              </div>
            </ClassName>
            <ClassIntroduce>
              <ClassLabel for="classIntroduce">수업 소개</ClassLabel>
              <div style={{position: "relative"}}>
                <ClassIntroduceInput
                  id="classIntroduce"
                  value={classIntroduce}
                  onChange={changeClassIntroduce}
                />
                <ClassIntroduceCount>{classIntroduce.length}/1000</ClassIntroduceCount>
              </div>
            </ClassIntroduce>
            <ClassAddBtn>
              다음
            </ClassAddBtn>
          </ClassAddBody>
        </ClassAddBox>
      </ClassAddContainer>
    </React.Fragment>
  )
}

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