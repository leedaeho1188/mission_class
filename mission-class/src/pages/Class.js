import React from  'react'
import styled from  'styled-components'
import ApplyClassOption from '../components/ApplyClassOption'
import ApplyClassBody from '../components/ApplyClassBody'
import ClassList from '../components/ClassList'


const Class = () => {

  return(
    <React.Fragment>
      <ClassContainer>
        <ClassBox>
          <ClassBody>
            <ClassList/>
            <ClassList/>
            <ClassList/>
            <ClassList/>
          </ClassBody>
        </ClassBox>
      </ClassContainer>
    </React.Fragment>
  )

}



const ClassContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ClassBox = styled.div`
  width: 1060px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  box-sizing: border-box;
  @media (max-width:500px){
    width: 100%;
    margin-bottom: 60px;
  };
`

const ClassBody = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;


`

export default Class