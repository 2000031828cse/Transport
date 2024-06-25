import React, { useState } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
} from '@mui/material';

interface BusStop {
  id: string;
  name: string;
}

const busStops: BusStop[] = [
  { id: '1', name: 'Main Street' },
  { id: '2', name: 'Central Park' },
  { id: '3', name: 'University' },
  { id: '4', name: 'Airport' },
];

const BusPassRequest: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [selectedBusStop, setSelectedBusStop] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Bus Pass Requested:
      Name: ${userName}
      ID: ${userId}
      Bus Stop: ${selectedBusStop}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Request a Bus Pass
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            fullWidth
            label="Bus Stop"
            value={selectedBusStop}
            onChange={(e) => setSelectedBusStop(e.target.value)}
            required
          >
            <MenuItem value="" disabled>
              Select a bus stop
            </MenuItem>
            {busStops.map((stop) => (
              <MenuItem key={stop.id} value={stop.name}>
                {stop.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Request Bus Pass
        </Button>
      </Box>
    </Container>
  );
};

export default BusPassRequest;
