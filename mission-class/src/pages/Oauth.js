import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {api as userActions} from "../redux/modules/user"
import {consoleLog} from "../shared/consoleLog"


const Oauth = () => {
  const dispatch = useDispatch()
  const code = new URL(window.location.href).searchParams.get("code");

  consoleLog(code)


  React.useEffect(() => {
    dispatch(userActions.SocialLogin(code))
  },[])


  return(
    <React.Fragment>
      <OauthContainer>
        로그인 중입니다.
      </OauthContainer>
    </React.Fragment>
  )


}

const OauthContainer = styled.div`
  padding-top: 50px;



`

export default Oauth;