import React from 'react';
import Header from '../../components/Header/Header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Button from "material-dashboard-react/src/components/CustomButtons/Button.js";

const HomePage = () => {
  return (
    <>
    <Header/>

      <h2>Страницы</h2>

      <Button type="button" color="primary">Primary</Button>

      <nav>
        <ul>
          <li><Link to='/registration'>Регистрация</Link></li>
          <li><Link to='/auth'>Авторизация</Link></li>
          <li><Link to='/forgotPassword'>Забыли пароль</Link></li>
          <li><Link to='/admin'>Админка</Link></li>
        </ul>
      </nav>


    </>
  );
};

export default HomePage;