import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


const ClassAdd2 = (props) => {


  return(
    <React.Fragment>
      <ClassAdd2Body>
        <ClassTime>
          <TextField
            id="time"
            label="Start Time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            style={{width: "140px", color:"red"}}
          />
        </ClassTime>
      </ClassAdd2Body>
    </React.Fragment>
  )
}

const ClassAdd2Body = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`

const ClassTime = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`

export default ClassAdd2