import React, { useState } from 'react';
import {
  Button,
  Container,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

interface Term {
  termId: number;
  startDate: string;
  endDate: string;
}

const TermPage: React.FC = () => {
  const initialTerm: Term = {
    termId: 1,
    startDate: '',
    endDate: ''
  };

  const [term, setTerm] = useState<Term>(initialTerm);
  const [updatedTerm, setUpdatedTerm] = useState<Term>({ ...initialTerm });
  const [error, setError] = useState<string>('');

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setUpdatedTerm((prevTerm) => ({
      ...prevTerm,
      startDate: newStartDate
    }));
    setError(''); // Clear error message when start date changes
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setUpdatedTerm((prevTerm) => ({
      ...prevTerm,
      endDate: newEndDate
    }));
    if (updatedTerm.startDate && newEndDate < updatedTerm.startDate) {
      setError('End date cannot be before the start date.');
    } else {
      setError('');
    }
  };

  const handleUpdateTerm = () => {
    if (!updatedTerm.startDate || !updatedTerm.endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    if (updatedTerm.endDate < updatedTerm.startDate) {
      setError('End date cannot be before the start date.');
      return;
    }

    setTerm(updatedTerm);
    console.log('Updated term:', updatedTerm);
    setUpdatedTerm({ ...initialTerm });
    setError(''); // Clear error message after successful update
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 3 }}>
        Term Details
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Term ID: {term.termId}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ minWidth: '100px', pr: 2 }}>
            Start Date:
          </Typography>
          <TextField
            type="date"
            value={updatedTerm.startDate}
            onChange={handleStartDateChange}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ minWidth: '100px', pr: 2 }}>
            End Date:
          </Typography>
          <TextField
            type="date"
            value={updatedTerm.endDate}
            onChange={handleEndDateChange}
            variant="outlined"
            fullWidth
          />
        </Box>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdateTerm}
        sx={{ mb: 2 }}
      >
        Update Term
      </Button>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Term Period
        </Typography>
        {term.startDate && term.endDate ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Start Date</strong>
                </TableCell>
                <TableCell>
                  <strong>End Date</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{formatDate(term.startDate)}</TableCell>
                <TableCell>{formatDate(term.endDate)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Please select start and end dates.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default TermPage;
