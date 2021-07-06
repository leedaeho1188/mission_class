import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const BottomMenu = () => {

  return(
    <React.Fragment>
      <BottomContainer>
        <BottomIcon>
          <HomeOutlinedIcon style={{fontSize:"30"}} />
          <BottomIconText>메인</BottomIconText>
        </BottomIcon>
        <BottomIcon>
          <MenuIcon style={{fontSize:"30"}} />
          <BottomIconText>수업</BottomIconText>
        </BottomIcon>
        <BottomIcon>
          <PersonOutlineIcon style={{fontSize:"30"}} />
          <BottomIconText>프로필</BottomIconText>
        </BottomIcon>
      </BottomContainer>
    </React.Fragment>
  )

}


const BottomContainer = styled.div`
  height: 60px;
  width: 100%;
  border-top: 2px #e6e7e8 solid;
  background-color: #FFFFFF;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  box-sizing: border-box;
  @media (min-width:500px){
    display: none;
  }
`

const BottomIcon = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BottomIconText = styled.div`
  font-size: 13px;


`

export default BottomMenu;