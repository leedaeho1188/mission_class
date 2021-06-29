import React from  'react'
import styled from  'styled-components'
import ApplyClassOption from '../components/ApplyClassOption'

const ApplyClass = () => {


  return(
    <React.Fragment>
      <ApplyContainer>
        <ApplyBox>
          <ApplyClassOption/>
          <ApplyClassBody>

          </ApplyClassBody>
        </ApplyBox>
      </ApplyContainer>
    </React.Fragment>
  )

}



const ApplyContainer = styled.div`
  margin-top: 40px;
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

const ApplyClassBody = styled.div`
  display: flex;
  flex-wrap: wrap;



`


export default ApplyClass
