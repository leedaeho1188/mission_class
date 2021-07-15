import React from 'react';
import styled from 'styled-components';
import {themeColor} from '../shared/color';
import AddIcon from '@material-ui/icons/Add';
import {history} from '../redux/configStore';

const AddClassBtn = () => {

  return(
    <React.Fragment>
      <Button onClick={()=>{history.push('/classAdd')}} >
        <AddIcon style={{color: '#FFFFFF', fontSize:"35px"}} />
      </Button>
    </React.Fragment>
  )

}

const Button = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 15px;
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeColor};
  border-radius: 50px;
  box-shadow: 0px 0px 15px #00000026;
`

export default AddClassBtn;