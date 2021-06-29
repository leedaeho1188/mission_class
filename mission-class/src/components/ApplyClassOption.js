import React, {useState} from 'react'
import styled from 'styled-components'
import { LeftOutlined } from "@ant-design/icons";

const ApplyClassOption = (props) => {
  const [classOption, setClassOption] = useState(false)


  return(
    <React.Fragment>
      <OptionContainer>
        <ClassSelectBox>
          <ClassSelect onClick={() => {
            if(classOption){setClassOption(false)}
            else{setClassOption(true)}
            }} >
            바리스타
            {classOption? 
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
          
          {classOption? 
            <ClassOptionBox>
              <Class_option>바리스타</Class_option>
              <Class_option>로스팅</Class_option>
              <Class_option>제과제빵</Class_option>
            </ClassOptionBox>
          :null}
        </ClassSelectBox>
      </OptionContainer>
    </React.Fragment>
  )
}

const OptionContainer = styled.div`
  display: flex;

`

const ClassSelectBox = styled.div`
  display:flex;
  flex-direction: column;
  width: 200px;
`

const ClassSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border: 1px solid #ECECEC;
  padding: .8em 1em;
  font-size: 14px;
  border-radius:5px;
  cursor: pointer;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover{
    background: #ECECEC;
  }
`

const ClassOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px #00000026;
`

const Class_option = styled.div`
  height: 40px; 
  padding: .8em 1em;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover{
    background: #ECECEC;
  }
`

export default ApplyClassOption;