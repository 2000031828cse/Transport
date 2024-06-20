// import { Helmet } from 'react-helmet-async';
// import PageHeader from './PageHeader';
// import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import { Container, Grid } from '@mui/material';
// // import Footer from 'src/components/Footer';

// import WatchList from './WatchList';

// function DashboardCrypto() {
//   return (
//     <>
//       <Helmet>
//         <title>Crypto Dashboard</title>
//       </Helmet>
//       <PageTitleWrapper>
//         <PageHeader />
//       </PageTitleWrapper>
//       <Container maxWidth="lg">
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="stretch"
//           spacing={4}
//         >
//           {/* <Grid item xs={12}></Grid>
//           <Grid item lg={8} xs={12}></Grid>
//           <Grid item lg={4} xs={12}></Grid> */}
//           <Grid item xs={12}>
//             <WatchList />
//           </Grid>
//         </Grid>
//       </Container>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default DashboardCrypto;

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
// import Footer from 'src/components/Footer';

import WatchList from './WatchList';
import StudentTable from './StudentTable';

function DashboardAdmin() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          {/* <Grid item xs={12}></Grid>
          <Grid item lg={8} xs={12}></Grid>
          <Grid item lg={4} xs={12}></Grid> */}
          <Grid item xs={12}>
            <WatchList />
          </Grid>
          <Grid item xs={12}>
            <StudentTable />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default DashboardAdmin;