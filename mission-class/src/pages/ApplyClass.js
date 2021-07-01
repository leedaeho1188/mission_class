import React from  'react'
import styled from  'styled-components'
import ApplyClassOption from '../components/ApplyClassOption'
import ApplyClassBody from '../components/ApplyClassBody'

const ApplyClass = () => {

  console.log('하이')

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
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ApplyBox = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
`


export default ApplyClass
