import React, {useState} from 'react';
import styled from 'styled-components';
import {Select} from  'antd';
import ProfileImgUpload from '../components/ProfileImgUpload';
import {lightColor} from '../shared/color'

const ProfileUpdate = () => {
  const [Image, setImage] = useState();
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [churchName, setChurchName] = useState('');
  const [churchDuty, setChurchDuty] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userJob, setUserJob] = useState('');

  const changeProfileName = (e) => {
    if(name.length > 5){
      return
    }
    setName(e.target.value)
  }

  const changeProfileNickname = (e) => {
    if(nickname.length > 10){
      return
    }
    setNickname(e.target.value)
  }

  const changeChurchName = (e) => {
    if(churchName.length > 20){
      return
    }
    setChurchName(e.target.value);
  }

  const changeChurchDuty = (e) => {
    if(churchDuty.length > 10){
      return
    }
    setChurchDuty(e.target.value);
  }

  const changePhoneNumber = (e) => {
    if(phoneNumber.length > 13){
      return
    }
    setPhoneNumber(e.target.value);
  }

  const changeUserJob = (e) => {
    setUserJob(e.target.value);
  }

  const SubmitSignUp = () => {
    const userInfo = {
      profileImg: Image,
      name: name,
      nickname: nickname,
      churchName: churchName,
      churchDuty: churchDuty,
      job: userJob,
      phoneNumber: phoneNumber,
    }

  }

  return(
    <React.Fragment>
      <ProfileUpdateContainer>
        <ProfileUpdateBox>
          <ProfileUpdateHeader>
            회원가입
          </ProfileUpdateHeader>
          <ProfileUpdateBody>
            <ProfileImgBox>
              <ProfileImgUpload setImage={setImage} />
            </ProfileImgBox>
            <ProfileName>
              <ProfileLabel for="profileName">이름</ProfileLabel>
              <ProfileInput
                id="profileName"
                value={name}
                onChange={changeProfileName}
                placeholder="자신의 실명을 적어주세요."
              />
            </ProfileName>
            <ProfileNickname>
              <ProfileLabel for="profileNickname" >닉네임</ProfileLabel>
              <ProfileInput
                id="profileNickname"
                value={nickname}
                onChange={changeProfileNickname}
                placeholder="사이트에서 사용할 닉네임을 적어주세요."
              />
            </ProfileNickname>
            <ProfilePhoneNumber>
              <ProfileLabel for="profilePhoneNumber">핸드폰 번호</ProfileLabel>
              <ProfileInput
                id="profilePhoneNumber"
                placeholder="핸드폰 번호를 적어주세요."
                value={phoneNumber}
                onChange={changePhoneNumber}
              />
            </ProfilePhoneNumber>
            <ChurchName>
              <ProfileLabel for="churchName">교회 이름</ProfileLabel>
              <ProfileInput
                id="churchName"
                placeholder="교회를 다니신다면 교회 이름을 적어주세요."
                value={churchName}
                onChange={changeChurchName}
              />
            </ChurchName>
            <ChurchDuty>
              <ProfileLabel for="churchDuty">교회 직분</ProfileLabel>
              <ProfileInput
                id="churchDuty"
                onChange={changeChurchDuty}
                value={churchDuty}
                placeholder="교회를 다니신다면 교회 직분을 적어주세요."
              />
            </ChurchDuty>
            <UserJob>
              <ProfileLabel for="userJob" style={{marginBottom:"12px"}}>직업</ProfileLabel>
              <ProfileSelect id="userJob" onChange={changeUserJob} >
                <option value="">직업을 선택해주세요.</option>
                <option value="중학생">중학생</option>
                <option value="고등학생">고등학생</option>
                <option value="대학생">대학생</option>
                <option value="대학원생">대학원생</option>
                <option value="취준생">취준생</option>
                <option value="회사원">회사원</option>
                <option value="그 외">그 외</option>
              </ProfileSelect>
            </UserJob>
          </ProfileUpdateBody>
          {Image && name && nickname && churchName && churchDuty && phoneNumber && userJob? 
          <ProfileUpdateBottom>
            <ProfileSubmitBtn onClick={SubmitSignUp} >회원가입 하기</ProfileSubmitBtn>
          </ProfileUpdateBottom>
          :
          <ProfileUpdateBottom>
            <ProfileSubmitBtn style={{backgroundColor:"#757575"}} >회원가입 하기</ProfileSubmitBtn>
          </ProfileUpdateBottom>
          }
        </ProfileUpdateBox>
      </ProfileUpdateContainer>
    </React.Fragment>
  )
}

const ProfileUpdateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ProfileUpdateBox = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  padding: 0px 30px;
  box-sizing: border-box;
`

const ProfileUpdateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 15px;
`

const ProfileUpdateBody = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileUpdateBottom = styled.div`
`

const ProfileSubmitBtn = styled.div`
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

const ProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 20px;
`

const ProfileNickname = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ProfilePhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ChurchName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ChurchDuty = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const UserJob = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const ProfileSelect = styled.select`
  border-radius: 10px;
  position: relative;
  height: 42px;
  padding: 0px 15px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  outline: none;
  opacity: 0.8;
  box-sizing: border-box;
`

const ProfileLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`

const ProfileInput = styled.input`
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

export default ProfileUpdate;

