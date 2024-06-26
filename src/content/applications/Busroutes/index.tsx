import React from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useBusRoutes } from './BusRoutesContext';

const BusStages: React.FC = () => {
  const navigate = useNavigate();
  const { stages, deleteStage } = useBusRoutes();

  const handleAddRouteClick = () => {
    navigate('/management/addroutes');
  };

  const handleEditStage = (stage) => {
    navigate(`/management/addroutes?edit=${stage.sno}`);
  };

  const handleDeleteStage = (sno: number) => {
    deleteStage(sno);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#ffffff',
        color: '#000000',
        marginBottom: '16px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px'
        }}
      >
        <Typography variant="h6">Bus Routes</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000000',
            color: '#ffffff',
            '&:hover': { backgroundColor: '#333333' }
          }}
          startIcon={<AddIcon />}
          onClick={handleAddRouteClick}
        >
          Add Route
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="bus routes table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ color: '#000000' }}>S.No</TableCell>
              <TableCell sx={{ color: '#000000' }}>Shift</TableCell>
              <TableCell sx={{ color: '#000000' }}>Route Name</TableCell>
              <TableCell sx={{ color: '#000000' }}>Timings</TableCell>
              <TableCell sx={{ color: '#000000' }}>Starting Point</TableCell>
              <TableCell sx={{ color: '#000000' }}>Stops</TableCell>
              <TableCell sx={{ color: '#000000' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stages.map((stage) => (
              <TableRow key={stage.sno}>
                <TableCell sx={{ color: '#000000' }}>{stage.sno}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{stage.shift}</TableCell>
                <TableCell sx={{ color: '#000000' }}>
                  {stage.routeName}
                </TableCell>
                <TableCell sx={{ color: '#000000' }}>{stage.timings}</TableCell>
                <TableCell sx={{ color: '#000000' }}>
                  {stage.startingPoint}
                </TableCell>
                <TableCell sx={{ color: '#000000' }}>
                  {stage.stops.join(' - ')}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditStage(stage)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteStage(stage.sno)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BusStages;
