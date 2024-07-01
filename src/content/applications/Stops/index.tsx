import React from 'react';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStops } from './StopsContext';

const Stops: React.FC = () => {
  const { stops, deleteStop } = useStops();
  const navigate = useNavigate();

  const handleAddStop = () => {
    navigate('/management/add-stop');
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}
    >
      <Typography variant="h1" align="center" sx={{ mb: 3 }}>
        Manage Stops
      </Typography>
      <Box my={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddStop}
          sx={{ mb: 3 }}
        >
          Add Stop
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Stop Number</strong>
              </TableCell>
              <TableCell>
                <strong>Stop Name</strong>
              </TableCell>
              <TableCell>
                <strong>Latitude</strong>
              </TableCell>
              <TableCell>
                <strong>Longitude</strong>
              </TableCell>
              <TableCell>
                <strong>Address</strong>
              </TableCell>
              <TableCell>
                <strong>Landmark</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stops.map((stop) => (
              <TableRow key={stop.number}>
                <TableCell>{stop.number}</TableCell>
                <TableCell>{stop.name}</TableCell>
                <TableCell>{stop.latitude}</TableCell>
                <TableCell>{stop.longitude}</TableCell>
                <TableCell>{stop.address}</TableCell>
                <TableCell>{stop.landmark}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteStop(stop.number)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default Stops;
