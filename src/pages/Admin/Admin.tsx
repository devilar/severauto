import React from 'react';
import Header from '../../components/Header/Header';
import RegForm from '../../components/Registration/RegForm';
import Footer from '../../components/Footer/Footer';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar/Sidebar';
import Box from '@mui/material/Box';

const Admin = () => {
  return (
   <Box display="grid" gridTemplateColumns="200px 1fr">
     <div><Sidebar/></div>
     <div>
      <Header/>
      admin
      <Footer/>
     </div>
   </Box>
  );
};

export default Admin;