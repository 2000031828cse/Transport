import React, { useState } from 'react';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Box
} from '@mui/material';

interface Stop {
  number: number;
  name: string;
}

const Stops: React.FC = () => {
  const [stopName, setStopName] = useState<string>('');
  const [stops, setStops] = useState<Stop[]>([]);
  const [stopNumber, setStopNumber] = useState<number>(1);

  const handleAddStop = () => {
    if (stopName.trim() === '') return;
    setStops([...stops, { number: stopNumber, name: stopName }]);
    setStopName('');
    setStopNumber(stopNumber + 1);
  };

  return (
    <Container>
      <Box my={4}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <TextField
            label="Stop Name"
            variant="outlined"
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleAddStop}>
            Add Stop
          </Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Stop Number</TableCell>
              <TableCell>Stop Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stops.map((stop) => (
              <TableRow key={stop.number}>
                <TableCell>{stop.number}</TableCell>
                <TableCell>{stop.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default Stops;
