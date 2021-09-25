import React from 'react';
import styled from 'styled-components';
import {history} from '../redux/configStore';
import {lightColor} from '../shared/color'


const Main = () => {
  return(
    <React.Fragment>
      <MainContainer>
        <MainBox>
          <ApplyAdminBtn onClick={()=>{history.push('/admin/apply')}} >단체 신청</ApplyAdminBtn>
        </MainBox>
      </MainContainer>
    </React.Fragment>
  )
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const MainBox = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  padding: 0px 30px;
  box-sizing: border-box;
`

const ApplyAdminBtn = styled.div`
  padding: 10px 12px;
  background-color: ${lightColor};
  margin-top: 20px;
  text-align: center;
  border-radius: 5px;

`

export default Main