import React, { useState } from 'react';
import Test from "./Test";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';

export const App = () => {

  const [alert,setAlert] = useState(false);

  return (
    <div>
      <button onClick={()=>setAlert(true)}>yeas</button>
      {alert && <Alert severity="error">This is an error alert — check it out!</Alert>}
    </div>
  );
};

/*
export const App = () => {
  return (
    <div className='counter'>



        <Test width='250px' height='200px'>
            <button>345345!</button>
            TEST5
            <p>HI</p>
        </Test>


      <FormControl>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    </div>
  );
};


 */