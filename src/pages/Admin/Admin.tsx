import React from 'react';
import Header from '../../components/Header/Header';
import RegForm from '../../components/Registration/RegForm';
import Footer from '../../components/Footer/Footer';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar/Sidebar';

const Admin = () => {
  return (
   <Grid container spacing={0}>
     <Grid spacing={0} item xs={2}><Sidebar/></Grid>
     <Grid item xs={10}>
      <Header/>
      admin
      <Footer/>
     </Grid>
   </Grid>
  );
};

export default Admin;