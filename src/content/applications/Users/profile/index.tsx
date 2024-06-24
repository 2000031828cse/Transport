// import { Helmet } from 'react-helmet-async';
// // import Footer from 'src/components/Footer';

// import { Grid, Container } from '@mui/material';

// import ProfileCover from './ProfileCover';
// import RecentActivity from './RecentActivity';
// import Feed from './Feed';
// import PopularTags from './PopularTags';
// import MyCards from './MyCards';
// import Addresses from './Addresses';

// function ManagementUserProfile() {
//   const user = {
//     savedCards: 7,
//     name: 'Catherine Pike',
//     coverImg: '/static/images/placeholders/covers/5.jpg',
//     avatar: '/static/images/avatars/4.jpg',
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
//     jobtitle: 'Web Developer',
//     location: 'Barcelona, Spain',
//     followers: '465'
//   };

//   return (
//     <>
//       <Helmet>
//         <title>User Details - Management</title>
//       </Helmet>
//       <Container sx={{ mt: 3 }} maxWidth="lg">
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="stretch"
//           spacing={3}
//         >
//           <Grid item xs={12} md={8}>
//             <ProfileCover user={user} />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <RecentActivity />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Feed />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <PopularTags />
//           </Grid>
//           <Grid item xs={12} md={7}>
//             <MyCards />
//           </Grid>
//           <Grid item xs={12} md={5}>
//             <Addresses />
//           </Grid>
//         </Grid>
//       </Container>
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default ManagementUserProfile;

import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid
} from '@mui/material';

interface UserProfile {
  name: string;
  email: string;
  phoneNumber: string;
}

const Profile: React.FC = () => {
  // Mock user data - replace with actual user data from props or context
  const initialUser: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890'
  };

  const [user, setUser] = useState<UserProfile>(initialUser);
  const [name, setName] = useState<string>(initialUser.name);
  const [email, setEmail] = useState<string>(initialUser.email);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    initialUser.phoneNumber
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
  }, [user]);

  const handleSave = () => {
    // Update user profile logic here (could be an API call)
    const updatedUser: UserProfile = { ...user, name, email, phoneNumber };
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setIsEditing(false);
  };

  const handlePasswordReset = () => {
    // Implement password reset logic here (e.g., send email)
    alert(`Password reset link has been sent to ${user.email}`);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          Profile
        </Typography>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={!isEditing}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="space-between">
          {isEditing ? (
            <>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePasswordReset}
          >
            Change Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
