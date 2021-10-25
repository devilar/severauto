import React from 'react';
import Grid from '@mui/material/Grid';
import './header.scss';
import { Typography } from '@mui/material';
import Image from '../Image/Image';

const Header = ({...props}) => {
  return (
    <Grid className='header' container spacing={2} height='100px'>

      <Grid p={'10px'} className ='logo' item xs={2}><Image height='60px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Aspect_ratio_-_4x3.svg/1200px-Aspect_ratio_-_4x3.svg.png'/></Grid>
      <Grid spacing={0} item xs={10}><Typography align='center' component="h2" variant="h3" color="white">Добро пожаловать! (welcommen)</Typography></Grid>

    </Grid>
  );
};

export default Header;





