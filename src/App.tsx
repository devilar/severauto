import React, { useState } from 'react';
import Test from "./Test";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';
import Search from './components/Search/Search';
import Item from './components/Item';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import counter from './store/counter';
import UserList from './components/UserList';
import { IUser } from './types/types';
import { Switch } from 'react-router-dom';
import './style.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Registration from './pages/Registration/Registration';
import HomePage from './pages/HomePage/HomePage';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import Auth from './pages/Auth/Auth';



export const App = () => {


  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>

        <Route path='/registration' component={Registration} />
        <Route path='/admin' component={Admin} />
        <Route path='/auth' component={Auth} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )


};
