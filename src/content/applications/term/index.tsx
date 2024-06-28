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

  const [terms, setTerms] = useState<Term[]>([]);
  const [newTerm, setNewTerm] = useState<Term>({ ...initialTerm });
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
    setNewTerm((prevTerm) => ({
      ...prevTerm,
      startDate: newStartDate
    }));
    setError('');
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setNewTerm((prevTerm) => ({
      ...prevTerm,
      endDate: newEndDate
    }));
    if (newTerm.startDate && newEndDate < newTerm.startDate) {
      setError('End date cannot be before the start date.');
    } else {
      setError('');
    }
  };

  const handleCreateTerm = () => {
    if (!newTerm.startDate || !newTerm.endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    if (newTerm.endDate < newTerm.startDate) {
      setError('End date cannot be before the start date.');
      return;
    }

    setTerms((prevTerms) => [
      ...prevTerms,
      { ...newTerm, termId: prevTerms.length + 1 }
    ]);
    console.log('Created term:', newTerm);
    setNewTerm({ ...initialTerm, termId: terms.length + 2 });
    setError('');
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
          Term ID: {newTerm.termId}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ minWidth: '100px', pr: 2 }}>
            Start Date:
          </Typography>
          <TextField
            type="date"
            value={newTerm.startDate}
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
            value={newTerm.endDate}
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
        onClick={handleCreateTerm}
        sx={{ mb: 2 }}
      >
        Create Term
      </Button>

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Term Periods
        </Typography>
        {terms.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Term ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Start Date</strong>
                </TableCell>
                <TableCell>
                  <strong>End Date</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {terms.map((term) => (
                <TableRow key={term.termId}>
                  <TableCell>{term.termId}</TableCell>
                  <TableCell>{formatDate(term.startDate)}</TableCell>
                  <TableCell>{formatDate(term.endDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No terms created yet.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default TermPage;
