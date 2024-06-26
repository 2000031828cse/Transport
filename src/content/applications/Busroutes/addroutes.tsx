// AddRoute.js or AddRoute.tsx
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Typography
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStops } from '../Stops/StopsContext';
import { useBusRoutes } from './BusRoutesContext';

const AddRoute: React.FC = () => {
  const { stops } = useStops();
  const { addStage, updateStage, stages } = useBusRoutes();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const editSno = searchParams.get('edit');

  const initialStage = {
    sno: stages.length + 1,
    shift: '',
    location: '',
    routeId: '',
    timings: '',
    route: '',
    startingPoint: '',
    stops: []
  };

  const [newStage, setNewStage] = useState(initialStage);

  useEffect(() => {
    if (editSno) {
      const stageToEdit = stages.find(
        (stage) => stage.sno === parseInt(editSno)
      );
      if (stageToEdit) {
        setNewStage(stageToEdit);
      }
    }
  }, [editSno, stages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStage({ ...newStage, [name]: value });
  };

  const handleStopsChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    setNewStage({ ...newStage, stops: value });
  };

  const handleAddOrUpdateStage = () => {
    if (editSno) {
      updateStage(newStage);
    } else {
      addStage(newStage);
    }
    navigate('/management/busstages');
  };

  const handleCancel = () => {
    navigate('/management/busstages');
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h6">
        {editSno ? 'Edit Route' : 'Add Route'}
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          label="Shift"
          variant="outlined"
          name="shift"
          value={newStage.shift}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: '8px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          label="Route ID"
          variant="outlined"
          name="routeId"
          value={newStage.routeId}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: '8px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          label="Timings"
          variant="outlined"
          name="timings"
          value={newStage.timings}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: '8px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          label="Route"
          variant="outlined"
          name="route"
          value={newStage.route}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: '8px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <TextField
          label="Starting Point"
          variant="outlined"
          name="startingPoint"
          value={newStage.startingPoint}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: '8px' }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '8px' }}>
        <InputLabel id="pickup-points-label">Stops</InputLabel>
        <Select
          labelId="pickup-points-label"
          id="pickup-points"
          multiple
          value={newStage.stops}
          onChange={handleStopsChange}
          fullWidth
        >
          {stops.map((stop) => (
            <MenuItem key={stop.number} value={stop.name}>
              {stop.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={handleAddOrUpdateStage}
        sx={{
          backgroundColor: '#000000',
          color: '#ffffff',
          marginRight: '8px'
        }}
      >
        {editSno ? 'Update Route' : 'Add Route'}
      </Button>
      <Button onClick={handleCancel} color="secondary">
        Cancel
      </Button>
    </Box>
  );
};

export default AddRoute;
