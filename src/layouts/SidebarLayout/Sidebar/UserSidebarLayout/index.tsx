import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../usersidebarmenu';

import { Box, CssBaseline } from '@mui/material';

const UserSidebarLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      {/* <Header /> */}
      <Box sx={{ display: 'flex', flexGrow: 1, mt: 0 }}>
        <UserSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default UserSidebarLayout;
