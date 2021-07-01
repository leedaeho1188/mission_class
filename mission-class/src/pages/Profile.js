import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return(
    <React.Fragment>
      <ProfileContainer>
        <ProfileBox>
          <ProfileLeft>
            <ProfileImg src="https://static.conects.com/skyedu_conects/imgs/teacher/photo/500_500/mst01.png" />
          </ProfileLeft>
          <ProfileRight>
            
          </ProfileRight>
        </ProfileBox>
      </ProfileContainer>
    </React.Fragment>
  )
}

const ProfileContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ProfileBox = styled.div`
  width: 1060px;
  display: flex;
  padding: 0px 15px;
  box-sizing: border-box;
`

const ProfileLeft = styled.div`
  display:flex;
  flex-direction: column;
`

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;

`

export default Profile