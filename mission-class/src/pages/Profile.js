import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import user from '../redux/modules/user';



const Profile = () => {

  const dispatch = useDispatch();
  const user_list = useSelector((state) => state.user.user);


  return(
    <React.Fragment>
      <ProfileContainer>
        <ProfileBox>
          <ProfileLeft>
            <ProfileImg src={user_list.profileImg} />
          </ProfileLeft>
          <ProfileRight>
            <ProfileName>{user_list.name}</ProfileName>
            <ProfileChurch>
              {user_list.churchName?
              <> 
                <ProfileChurhName>{user_list.churchName}</ProfileChurhName>
                <span style={{margin:"0 3px"}} >/</span>
                <ProfileChurchDuty>{user_list.churchDuty}</ProfileChurchDuty>
              </>
              :
              <ProfileChurhName>No Church</ProfileChurhName>
              }
            </ProfileChurch>
            <ProfilePhoneNumber>{user_list.phoneNumber}</ProfilePhoneNumber>
            <ProfileIntroduce>{user_list.introduce}</ProfileIntroduce>
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
  width: 100%;
  display: flex;
  margin-top: 50px;
  margin-bottom: 60px;
  box-sizing: border-box;
  align-items: center;
  padding: 0px 30px;
`

const ProfileLeft = styled.div`
  display:flex;
  flex-direction: column;
`

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.75);
`

const ProfileName = styled.div`
  font-size: 17px;
  font-weight: bold;
`

const ProfileChurch = styled.div`
  display: flex;
`

const ProfileChurhName = styled.div`

`

const ProfileChurchDuty = styled.div`

`

const ProfileIntroduce = styled.div`
  opacity: 0.7;
`

const ProfilePhoneNumber = styled.div`


`

export default Profile