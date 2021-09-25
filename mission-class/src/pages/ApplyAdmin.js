import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
import {lightColor} from '../shared/color'
import {api as userActions} from '../redux/modules/user'

const ApplyAdmin = () => {
  const dispatch = useDispatch();

  const [classPlace, setClassPlace] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [introduce, setIntroduce] = useState();
  
  const changeClassPlace = (e) => {
    setClassPlace(e.target.value);
  }

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const changeIntroduce = (e) => {
    setIntroduce(e.target.value);
  }

  const applyClassPlace = () => {
    const application = {
      classPlace: classPlace,
      phoneNumber: phoneNumber,
      introduce: introduce,
    }
    dispatch(userActions.ApplyAdmin(application))
  }

  return(
    <React.Fragment>
      <ApplyAdminContainer>
        <ApplyAdminBox>
          <ApplyAdminHeader>
            단체 등록
          </ApplyAdminHeader>
          <ApplyAdminBody>
            <GroupName>
              <ApplyLabel for="classPlace">단체 이름</ApplyLabel>
              <ApplyInput 
                id="classPlace"
                value={classPlace}
                onChange={changeClassPlace}
              />
            </GroupName>
            <PhoneNumber>
              <ApplyLabel for="phoneNumber">전화번호</ApplyLabel>
              <ApplyInput 
                id="phoneNumber"
                value={phoneNumber}
                onChange={changePhoneNumber}
              />
            </PhoneNumber>
            <Introduce>
              <ApplyLabel for="introduce">단체 소개</ApplyLabel>
              <ApplyTextarea 
                id="introduce" 
                rows="4"
                value={introduce}
                onChange={changeIntroduce}  
              />
            </Introduce>
            {classPlace && phoneNumber && introduce? 
            <ApplySubmitBtn
              onClick={applyClassPlace}
            > 등록하기 </ApplySubmitBtn>
            :
            <ApplySubmitBtn style={{backgroundColor:"#757575"}} > 등록하기 </ApplySubmitBtn>
            }
          </ApplyAdminBody>
        </ApplyAdminBox>
      </ApplyAdminContainer>
    </React.Fragment>
  )
}

const ApplyAdminContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`

const ApplyAdminBox = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  padding: 0px 30px;
  box-sizing: border-box;
`

const ApplyAdminHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
`

const ApplyAdminBody = styled.div`
  display: flex;
  flex-direction: column;
`

const GroupName = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  `

const PhoneNumber = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

const ApplySubmitBtn = styled.div`
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
margin-bottom: 20px;
border-radius: 10px;
`

const Introduce = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

const ApplyInput = styled.input`
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

const ApplyTextarea = styled.textarea`
  border-radius: 10px;
  position: relative;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  outline: none;
  opacity: 0.8;
  box-sizing: border-box;
  resize: none;
  // height: 4em;
  z-index:5
`

const ApplyLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`

export default ApplyAdmin;