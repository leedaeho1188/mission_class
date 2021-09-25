import React from 'react';
import styled from 'styled-components';
import {history} from '../redux/configStore';

const Class = (props) => {
  console.log(props)
  return(
    <React.Fragment>
      <ClassContainer onClick={() => {
        history.push(`/class/${props.classId}`)
      }} >
        <ClassImg src={props.classPicture} />
        <ClassLocation>{props.classPlace}</ClassLocation>
        <ClassName>{props.classTitle}</ClassName>
      </ClassContainer>
    </React.Fragment>
  )

}

const ClassContainer = styled.div`
  width: 48%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`

const ClassImg = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
  border-radius: 5%;
`

const ClassLocation = styled.div`
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;
`

const ClassName =  styled.div`
  font-size: 14px;
  margin-top: 5px;
`

export default Class;