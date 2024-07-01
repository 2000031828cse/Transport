// src/components/AdminPanel.tsx
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useUserContext } from 'src/content/dashboards/User/UserContext';

const AdminPanel: React.FC = () => {
  const { addUser } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateUser = () => {
    addUser({ username, password, role: 'user' });
    setMessage('User created successfully');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create User
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreateUser}>
          Create User
        </Button>
        {message && (
          <Typography color="primary" mt={2}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default AdminPanel;
