// UserSidebar.jsx

import React, { useContext } from 'react';
import { List, ListItem, Button, styled, Box, alpha } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
    background: ${theme.palette.background.default};
    height: 100%;

    .MuiList-root {
      padding: ${theme.spacing(1)};
      .MuiListItem-root {
        padding: 0;
        .MuiButton-root {
          justify-content: flex-start;
          padding: ${theme.spacing(1.25, 2)};
          width: 100%;
          color: ${theme.palette.text.primary};
          border-radius: ${theme.shape.borderRadius}px;
          text-transform: none;
          .MuiButton-startIcon {
            color: ${alpha(theme.palette.primary.main, 0.8)};
            font-size: 20px;
            margin-right: ${theme.spacing(1)};
          }
        }
        .MuiButton-root:hover {
          background: ${alpha(theme.palette.primary.main, 0.1)};
          color: ${theme.palette.primary.main};
        }
        &.active .MuiButton-root {
          background: ${alpha(theme.palette.primary.main, 0.2)};
          color: ${theme.palette.primary.main};
        }
      }
    }
  `
);

const UserSidebar = () => {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <MenuWrapper>
      <List component="nav">
        <ListItem component="div" disablePadding>
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
        <ListItem component="div" disablePadding>
          <Button
            disableRipple
            component={RouterLink}
            onClick={closeSidebar}
            to="/management/profile"
            startIcon={<AccountCircleTwoToneIcon />}
          >
            Profile
          </Button>
        </ListItem>
        <ListItem component="div" disablePadding>
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
        <ListItem component="div" disablePadding>
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
        <ListItem component="div" disablePadding>
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
