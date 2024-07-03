import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Box } from '@mui/material';

import RecentOrders from './RecentOrders';

function RequestedDetails() {
  return (
    <>
      <Helmet>
        <title>Bus Pass Requests Table</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Box mb={4}> </Box>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RequestedDetails;
