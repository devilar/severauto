import React from 'react';
import './sidebar.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Btn} from '../Button/Button';
import Box from '@mui/material/Box';
import Image from '../Image/Image';
import logo from '../../../public/logo.png';



const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='logo'><Image src={logo}/></div>

      <nav>
        <ul>
          <li><Btn fullWidth className='active'><Link to="/admin/ostatki">Остатки</Link></Btn> </li>
          <li><Btn fullWidth><Link to="/admin/postavshiki">Поставщики</Link></Btn></li>
          <li><Btn fullWidth><Link to="/admin/stock">Склады</Link></Btn></li>
          <li><Btn fullWidth><Link to="/admin/sotrudniki">Сотрудники</Link></Btn></li>
          <li><Btn fullWidth><Link to="/admin/dogovori">Договоры</Link></Btn></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;