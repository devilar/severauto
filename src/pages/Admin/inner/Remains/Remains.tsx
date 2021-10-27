import React, { useState } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import Form from '../../../../components/Form/Form';
import { Input } from '../../../../components/Input/Input';
import { PrimaryButton } from '../../../../components/Button/PrimaryButton';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Sidebar from '../../../../components/Sidebar/Sidebar';

const schema = yup.object().shape({
  login:yup.string().min(3).max(10).required("Обязательное поле"),
  password:yup.string().min(6).max(20).required("Обязательное поле"),
  repeatPassword:yup.string().min(6).required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
});


const Remains = () => {

  const[message,setMessage] = useState('');

  const submitHandler = (data) => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, { id:1, title:'sar'})
      .then(res => {
        setMessage('Ошибка №68');
      })
  }
  const {register, handleSubmit, formState:{ errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  })

  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <div><Sidebar/></div>
      <div>
      <Header/>
      <Container maxWidth="sm">
      <Form onSubmit={handleSubmit(submitHandler)}>

        <Input
          {...register('login')}
          type="text"
          id="login"
          label="Введите логин"
          name="login"
          error={!!errors.login}
          helperText={errors?.login?.message}/>


        <Input
          {...register('password')}
          id="password"
          type="password"
          label="Введите пароль"
          name="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <Input
          {...register('repeatPassword')}
          id="repeatPassword"
          type="password"
          label="Повторите пароль"
          name="repeatPassword"
          error={!!errors.repeatPassword}
          helperText={errors?.repeatPassword?.message}
          tooltipTitle='test test!'
        />

        <PrimaryButton color="primary" fullWidth>Зарегистрироваться</PrimaryButton>
      </Form>

        <Button>Показать</Button>

      </Container>
      <Footer/>
      </div>
    </Box>
  );
};

export default Remains;


