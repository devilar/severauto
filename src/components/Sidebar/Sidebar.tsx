import React from 'react';
import './sidebar.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>


      <nav>
        <ul>
          <li>
            <Link to="/ostatki">Остатки</Link>
          </li>
          <li>
            <Link to="/postavshiki">Поставщики</Link>
          </li>
          <li>
            <Link to="/stock">Склады</Link>
          </li>
          <li>
            <Link to="/sotrudniki">Сотрудники</Link>
          </li>
          <li>
            <Link to="/dogovori">Договоры</Link>
          </li>
        </ul>
      </nav>


    </div>
  );
};

export default Sidebar;