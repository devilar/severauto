import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import {Typography } from '@mui/material';
import {makeStyles} from "@material-ui/core/styles";
import Image from '../Image/Image';
import logo from '../../../public/logo.png';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Header = ({...props}) => {


  return (
    <Grid className='header' container height='100px' alignItems='center' {...props}>

      {!props.noLogo && <div className='logo'><Link to='/'><Image height='60px' src={logo}/></Link></div>}
      <Grid spacing={0} item xs={10}><Typography align='center' component="h2" variant="h3" color="white">Название портала</Typography></Grid>
      <Grid spacing={0} item xs={2}><HeaderProfile/></Grid>

    </Grid>
  );
};

export default Header;





