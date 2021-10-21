import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const Auth = () => {

  const[login,setLogin] = useState('');
  const[password,setPassword] = useState('');

  const handleSubmit = (event) =>{

    event.preventDefault();
    console.log('event', event);
    console.log('test!');
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=5')
    .then(res => console.log('res data', res.data));

    //console.log('e target' , e.target.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id='login' type='text' label='Введите логин'/>
      <TextField id='password' type='password' label='Введите Пароль'/>
      <Button type='submit'>submit</Button>
    </form>
  );
};

export default Auth;