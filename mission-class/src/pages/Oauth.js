import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import axios from "axios";
import { setCookie, getCookie } from '../shared/Cookie';
import {api as userActions} from "../redux/modules/user"
import {consoleLog} from "../shared/consoleLog"


const Oauth = (props) => {
  const dispatch = useDispatch()
  const jwtToken = props.match;


  console.log(jwtToken, "Oauth.js")


  React.useEffect(() => {
    setCookie("is_login", jwtToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie(
      "is_login"
    )}`;
    // dispatch(userActions.SocialLogin())
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