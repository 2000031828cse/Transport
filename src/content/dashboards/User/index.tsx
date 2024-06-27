import { Helmet } from 'react-helmet-async';
import { Container, Grid, List, ListItem, Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import PassDetails from 'src/content/applications/buspassdetails';

function DashboardUser() {
  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PassDetails/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default DashboardUser;
