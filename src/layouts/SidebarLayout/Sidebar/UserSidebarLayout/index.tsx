import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../usersidebarmenu';
import Header from '../../Header'; // Adjust the import path as necessary
import { Box, CssBaseline } from '@mui/material';

const UserSidebarLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, mt: 5 }}> {/* mt: 2 adds a small gap below the header */}
        <UserSidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default UserSidebarLayout;
