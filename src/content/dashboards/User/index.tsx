import { Helmet } from 'react-helmet-async';
import { Container, Grid, List, ListItem, Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

function DashboardUser() {
  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={3}>
            <List>
              <ListItem disablePadding>
                <Button
                  component={RouterLink}
                  to="/user-dashboard/routes"
                  fullWidth
                >
                  Routes
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  component={RouterLink}
                  to="/user-dashboard/pass-details"
                  fullWidth
                >
                  Pass Details
                </Button>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  component={RouterLink}
                  to="/user-dashboard/pass-request"
                  fullWidth
                >
                  Pass Request
                </Button>
              </ListItem>
            </List>
          </Grid>
          {/* Main Content Area */}
          <Grid item xs={9}>
            {/* Content for each route will be rendered based on the Route component */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardUser;
