// UserSidebar.jsx

import React, { useContext } from 'react';
import { List, ListItem, Button, styled } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';

const MenuWrapper = styled('div')({
  padding: '16px'
});

const UserSidebar = () => {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <MenuWrapper>
      <List component="div">
        <ListItem component="div">
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/dashboard/user"
            startIcon={<BrightnessLowTwoToneIcon />}
          >
            Dashboard
          </Button>
        </ListItem>
        <ListItem component="div">
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/profile"
            startIcon={<AccountCircleTwoToneIcon />}
          >
            Profile
          </Button>
        </ListItem>
        <ListItem component="div">
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/routes"
            startIcon={<MmsTwoToneIcon />}
          >
            Routes
          </Button>
        </ListItem>
        <ListItem component="div">
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/bus-pass-details"
            startIcon={<MmsTwoToneIcon />}
          >
            Bus Pass Details
          </Button>
        </ListItem>
        <ListItem component="div">
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/bus-pass-request"
            startIcon={<RedeemTwoToneIcon />}
          >
            Bus Pass Request
          </Button>
        </ListItem>
      </List>
    </MenuWrapper>
  );
};

export default UserSidebar;
