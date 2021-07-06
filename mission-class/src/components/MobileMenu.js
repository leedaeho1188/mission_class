import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configStore';


const MobileMenu = (props) => {
  return(
    <React.Fragment>
      <OuterContainer onClick={()=>{props.setMobileMenu(false)}} />
      <MenuContainer>
        <MenuBox>
          <MobilePageMenu onClick={() => {history.push('/'); props.setMobileMenu(false)}} >교육 안내</MobilePageMenu>
          <MobilePageMenu onClick={()=>{history.push('/apply'); props.setMobileMenu(false)}} >교육 신청</MobilePageMenu>
          <MobilePageMenu>게시판</MobilePageMenu>
        </MenuBox>
      </MenuContainer>
    </React.Fragment>
  )
}

const OuterContainer = styled.div`
  z-index: 25;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;

`

const MenuContainer = styled.div`
  z-index: 30;
  background-color: #FFFFFF;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
`

const MenuBox = styled.div`
  margin-top: 100px;
  margin-left: 20px;
`

const MobilePageMenu = styled.div`
  font-size: 20px;
  font-family: Noto Sans CJK KR;
  font-weight: 600;
  margin-bottom: 18px;
`

export default MobileMenu;