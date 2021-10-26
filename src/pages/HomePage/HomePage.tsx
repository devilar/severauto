import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <Header/>

      <h2>Страницы</h2>

      <nav>
        <ul>
          <li><Link to='/registration'>Регистрация</Link></li>
          <li><Link to='/auth'>Авторизация</Link></li>
          <li><Link to='/forgotPassword'>Забыли пароль</Link></li>
          <li><Link to='/admin'>Админка</Link></li>
        </ul>
      </nav>


      <Footer/>
    </>
  );
};

export default HomePage;