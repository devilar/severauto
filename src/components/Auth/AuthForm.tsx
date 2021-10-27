import React from 'react';
import Form from '../Form/Form';
import { Input } from '../Input/Input';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {PrimaryButton} from '../Button/PrimaryButton';
import { Container } from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import { tarbarsss } from '../Lang/lang';

const schema = yup.object().shape({
  login:yup.string().min(3, tarbarsss(3)).max(10).required("Обязательное поле"),
  password:yup.string().min(6).max(20).required("Обязательное поле")
});

const RegForm = () => {

  const submitHandler = (data) => {
    console.log('good!', data);
  }

  const {register, handleSubmit, formState:{ errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  })

  return (
    <div>
      <Container maxWidth="sm">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Input
            {...register('login')}
            type="text"
            id="login"
            label="Введите логин"
            name="login"
            error={!!errors.login}
            helperText={errors?.login?.message}
            tooltip='Длинна логина должна быть от 5 до 30 символов. Логин должен содержать только буквы Латинского алфавита и не должен состоять только из цифр. Может содержать элементы пунктуации (-_.).Логин не может содержать пробел или заканчиваться точкой'
          />
          <Input
            {...register('password')}
            id="password"
            type="password"
            label="Пароль"
            name="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            tooltip='Длинна пароля не должна быть менее 8
символов. В пароле должны обязательно
быть буквы верхнего регистра, быквы
нижнего регистра, цифры или спец символы
(!,@,#,$,&,*,% и т.п.)
'
          />

          <PrimaryButton fullWidth>Авторизироваться</PrimaryButton>
        </Form>
      </Container>

    </div>

  );
};

export default RegForm;