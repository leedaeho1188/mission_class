import React from 'react';
import styled from 'styled-components';

const ProfileUpdate = () => {
  <React.Fragment>
    <ProfileUpdateContainer>
      <ProfileUpdateBox>
        <ProfileUpdateHeader>
          회원가입
        </ProfileUpdateHeader>
        <ProfileUpdateBody>

        </ProfileUpdateBody>
      </ProfileUpdateBox>
    </ProfileUpdateContainer>
  </React.Fragment>
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
  position: relative;
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



export default ProfileUpdate;

