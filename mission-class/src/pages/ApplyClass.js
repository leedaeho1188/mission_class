import React from  'react'
import styled from  'styled-components'
import ApplyClassOption from '../components/ApplyClassOption'
import ApplyClassBody from '../components/ApplyClassBody'

const ApplyClass = () => {

  return(
    <React.Fragment>
      <ApplyContainer>
        <ApplyBox>
          <ApplyClassOption/>
          <ApplyClassBody/>
        </ApplyBox>
      </ApplyContainer>
    </React.Fragment>
  )

}



const ApplyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ApplyBox = styled.div`
  width: 1060px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
`


export default ApplyClass
