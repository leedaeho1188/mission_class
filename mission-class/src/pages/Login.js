import React from 'react';
import styled from 'styled-components';
import KaKaoIcon from '../static/images/kakao.png'

const Login = () => {

  return(
    <React.Fragment>
      <LoginContainer>
        <LoginBox>
          <LoginHeader>로그인</LoginHeader>
          <LoginButton href="http://54.180.139.155/auth/kakao" >
            <LoginButtonIcon src={KaKaoIcon} />
            <LoginButtonText>카카오로 로그인</LoginButtonText>
          </LoginButton>
        </LoginBox>
      </LoginContainer>
    </React.Fragment>
  )

}

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
`

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const LoginHeader = styled.div`
  font-size: 20px;
`

const LoginButton = styled.a`
height: 55px;
width: 290px;
margin-top: 20px;
display: flex;
align-items: center;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
color: black;
box-sizing: border-box;
background: #FAE100;
border: none;

`
const LoginButtonIcon = styled.img`
  width: 50px;
  height: auto;
  padding: 0px 10px;
  @media (max-width: 500px) {

  } ;
`;
const LoginButtonText = styled.div`
  text-align: center;
  margin: auto;
  font-size: 18px; 
`;

export default Login;
