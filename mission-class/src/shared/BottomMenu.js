import React from 'react';
import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import swal from "sweetalert";
import {useSelector} from 'react-redux';
import {consoleLog} from '../shared/consoleLog' 
import {history} from '../redux/configStore'
import {themeColor} from '../shared/color';

const BottomMenu = () => {

  const url = useSelector((state)=>state.router.location.pathname);
  const is_login = useSelector((state)=>state.user.is_login);

  consoleLog(url)

  return(
    <React.Fragment>
      <BottomContainer>
        {url === "/"? 
        <BottomIcon onClick={()=>{history.push('/')}}>
          <HomeOutlinedIcon style={{fontSize:"30", color:themeColor}} />
          <BottomIconText style={{color: themeColor}} >메인</BottomIconText>
        </BottomIcon>
        :
        <BottomIcon onClick={()=>{history.push('/')}} >
          <HomeOutlinedIcon style={{fontSize:"30"}} />
          <BottomIconText>메인</BottomIconText>
        </BottomIcon>
        }
        {url.includes("/class")? 
        <BottomIcon onClick={()=>{history.push('/class')}}>
          <MenuIcon style={{fontSize:"30", color:themeColor}} />
          <BottomIconText style={{color:themeColor}} >수업</BottomIconText>
        </BottomIcon>
        :
        <BottomIcon onClick={()=>{history.push('/class')}} >
          <MenuIcon style={{fontSize:"30"}} />
          <BottomIconText>수업</BottomIconText>
        </BottomIcon>
        }
        {url.includes("/profile")? 
        <BottomIcon onClick={()=>{
          if(is_login){
            
            history.push('/profile');
          }else{
            swal({
              title: "먼저 로그인을 해주세요.",
              text: `로그인 페이지로 이동하겠습니다.`,
              icon: "error",
            });
            history.push('/login');
          }
          }}>
          <PersonOutlineIcon style={{fontSize:"30", color:themeColor}} />
          <BottomIconText style={{color:themeColor}}>프로필</BottomIconText>
        </BottomIcon>
        :
        <BottomIcon onClick={()=>{
          if(is_login){
            
            history.push('/profile');
          }else{
            swal({
              title: "먼저 로그인을 해주세요.",
              text: `로그인 페이지로 이동하겠습니다.`,
              icon: "error",
            });
            history.push('/login');
          }
        }} >
          <PersonOutlineIcon style={{fontSize:"30"}} />
          <BottomIconText>프로필</BottomIconText>
        </BottomIcon>
        }
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
  z-index: 5;
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