import { Helmet } from 'react-helmet-async';
import { Container, Grid, List, ListItem, Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

function DashboardUser() {
  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>
    </>
  );
}
export default DashboardUser;
