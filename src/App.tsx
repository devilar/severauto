import React, { useState } from 'react';
import Test from "./Test";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';
import Search from './components/Search/Search';
import Item from './components/Item';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import counter from './store/counter';
import UserList from './components/UserList';
import { IUser } from './types/types';

export const App = () => {

  const users: IUser[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      adress: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      }
    },
    {
      id: 2,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      adress: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      }
    },
    {
      id: 3,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      adress: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      }
    },

  ]

  const clickHandler = (e) =>{

    console.log('у', e);
  }

  return (
    <div>
    <Header/>
      {counter.count}
      <Auth/>
      <Test onClick={clickHandler} width='200px' height='300px'>
        test!!!
      </Test>

      <UserList users={users}/>

      <Footer/>
    </div>
  );

};
