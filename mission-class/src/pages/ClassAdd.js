import React from 'react';
import styled from 'styled-components';

const ClassAdd = () => {

  return(
    <React.Fragment>
      <ClassAddContainer>
        <ClassAddBox>
          <ClassAddHeader>
            클래스 추가
          </ClassAddHeader>
          <ClassAddBody>
            <ClassName>
              <ClassNameLabel for="className" >수업 이름</ClassNameLabel>
              <ClassNameInput
                id="className"
              />
            </ClassName>
          </ClassAddBody>
        </ClassAddBox>
      </ClassAddContainer>
    </React.Fragment>
  )

}

const ClassAddContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ClassAddBox = styled.div`
  width:100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;

`

const ClassAddHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
`

const ClassAddBody = styled.div`
  display: flex;
  flex-direction: column;
`

const ClassName = styled.div`
  display: flex;
  flex-direction: column;
`

const ClassNameLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`

const ClassNameInput = styled.input`

`

export default ClassAdd;