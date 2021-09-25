import React from  'react'
import styled from  'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import Class from '../components/Class'
import AddClassBtn from '../shared/AddClassBtn';
import {api as classActions} from '../redux/modules/class';

const ClassList = () => {
  const dispatch = useDispatch();
  const classList = useSelector((state) => state.class.classList)

  React.useEffect(() => {
    dispatch(classActions.getClassList());
  }, [])

  return(
    <React.Fragment>
      <AddClassBtn/>
      <ClassContainer>
        <ClassBox>
          <ClassBody>
            {classList.map((c) => {
              return(
                <Class key={c.id} {...c} />
              )
            })}
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

export default ClassList
