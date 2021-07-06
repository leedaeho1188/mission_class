import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import { history } from '../redux/configStore';
import MobileMenu from "../components/MobileMenu"
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);


  return(
    <React.Fragment>
      {/* {mobileMenu? 
        <MobileMenu setMobileMenu={setMobileMenu} />
        // <>
        //   <OuterContainer onClick={()=>{setMobileMenu(false)}} />
        //   <MenuContainer>
        //     <MenuBox>
        //       <MobilePageMenu onClick={() => {history.push('/'); setMobileMenu(false)}} >교육 안내</MobilePageMenu>
        //       <MobilePageMenu onClick={()=>{history.push('/apply'); setMobileMenu(false)}} >교육 신청</MobilePageMenu>
        //       <MobilePageMenu>게시판</MobilePageMenu>
        //     </MenuBox>
        //   </MenuContainer>
        // </>
        :null} */}
      <HeaderContainer>
        <HeaderBox>
          {/* <HeaderMenuIcon onClick={() => {setMobileMenu(true)}} >
            <MenuIcon/>
          </HeaderMenuIcon> */}
          <LogoBox onClick={() => {history.push('/')}} >미션 클래스</LogoBox>
          <HeaderSearchIcon>
            <SearchIcon/>
          </HeaderSearchIcon>
          <PageMenuBox>
            <PageMenu onClick={() => {history.push('/')}} >교육 안내</PageMenu>
            <PageMenu onClick={()=>{history.push('/apply')}} >교육 신청</PageMenu>
            <PageMenu>교재 신청</PageMenu>
          </PageMenuBox>
          <ProfileBox>
            <ProfileImg src="data:image/png;base64,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"
              onClick={()=>{history.push('/public')}}
            />
          </ProfileBox>
        </HeaderBox>
      </HeaderContainer>
    </React.Fragment>
  )

}

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 2px #e6e7e8 solid;
  background-color: #FFFFFF;
  position:fixed;
  left: 0;
  top: 0;
  z-index: 20;
`

const HeaderBox = styled.div`
width: 1060px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 15px;
box-sizing: border-box;
@media (max-width:500px){
  width: 100%;
};
`

const HeaderMenuIcon = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
  @media (min-width:500px){
    display: none;
  }
`

const HeaderSearchIcon = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
  @media (min-width:500px){
    display: none;
  }
`

const LogoBox = styled.button`
  font-size: 17px;
  font-weight: 600;
  font-family: Noto Sans CJK KR;
  background: #ffffff;
  border: none;
  cursor: pointer;
  @media (max-width:500px){
    font-size: 14px;
  }
`

const PageMenuBox = styled.div`
  display: flex;
  @media (max-width:500px){
    display: none;
  }
`

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width:500px){
    display: none;
  }
`

const PageMenu = styled.button`
  font-size: 15px;
  font-family: Noto Sans CJK KR;
  margin: 0 10px;
  background: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    border-bottom: 3px #bab8b3 solid;
    border-top: 3px #ffffff solid;
  };
`

const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 30px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width:500px){
    height: 18px;
    width: 18px;
    border-radius: 18px;
  }
`

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

export default Header