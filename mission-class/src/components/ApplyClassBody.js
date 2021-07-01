import React from 'react';
import styled from 'styled-components';


const ApplyClassBody = () => {
  return(
    <React.Fragment>
      <ClassBodyContainer>
        <ClassBody>
          <ClassName>바리스타 자격증반</ClassName>
          <ClassInstructorProfile src="https://static.conects.com/skyedu_conects/imgs/teacher/photo/500_500/mst01.png" />
          <ClassInstructorName>이대호</ClassInstructorName>
          <ClassDayTime>매주 <Bold>월요일</Bold>, <Bold>19:00~22:00</Bold></ClassDayTime>
          <ClassPlace>구갈 화평교회</ClassPlace>
          <ClassRemainingSeat>1자리 남음</ClassRemainingSeat>
          <ClassApplyBtn>신청하기</ClassApplyBtn>
        </ClassBody>
      </ClassBodyContainer>
    </React.Fragment>
  )
}

const ClassBodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`

const ClassBody = styled.div`
  width: 300px;
  // width: 90%;
  box-shadow: 0px 0px 15px #00000026;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 15px;
  box-sizing: border-box;
  border-radius: 8px;
  background: #FFFFFF;
  margin-right: 30px;
  margin-bottom: 30px;
`

const ClassDayTime = styled.div`
  margin-top: 15px;
  font-size: 14px;
`

const ClassName = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const Bold = styled.span`
  font-weight: 600;

`

const ClassInstructorProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-top: 15px;
  object-fit: cover;
`

const ClassInstructorName = styled.div`
  margin-top:6px;
  font-size: 15px;
  font-weight: 600;
`

const ClassRemainingSeat = styled.div`
  font-size:14px;
  margin-top: 10px;
`

const ClassApplyBtn = styled.div`
  margin-top: 15px;
  font-size: 15px;
  padding: 5px 8px;
  box-sizing: border-box;
  width: 100px;
  border: 2px #29366e solid;
  background-color: #29366e;
  color: #FFFFFF;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
  &:hover{
    border: #29366e 2px solid;
    background-color: #29366e;
    color: #FFFFFF;
  }
`

const ClassPlace = styled.div`
  margin-top: 10px;
  font-size: 14px;
`



export default ApplyClassBody;