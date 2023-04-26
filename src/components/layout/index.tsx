import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './Sidebar';

const Layout = () => {
  return (
    <Box bgcolor="rgba(0, 0, 0, 60%)" sx={{ minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg">
        <SideBar />
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
