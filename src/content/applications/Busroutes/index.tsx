import React, { useState } from 'react';
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
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Stage {
  sno: number;
  shift: string;
  location: string;
  routeId: string;
  route: string;
  startingPoint: string;
  pickupPoints: string;
}

const BusStages: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>([
    {
      sno: 1,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8A',
      route: 'Gorantla',
      startingPoint: 'Gorantla',
      pickupPoints: 'Gorantla - Chilles'
    },
    {
      sno: 2,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8B',
      route: 'Gorantla',
      startingPoint: 'Medical Hostel',
      pickupPoints:
        'Medical Hostel - Nagarulu - Vijaya Digital - Inner Ring Road'
    },
    {
      sno: 3,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8C',
      route: 'Lodge Center',
      startingPoint: 'Lodge Center',
      pickupPoints:
        'Lodge Center - SBI - Ala Hospital - AJ Gudi - Inner Ring Road'
    },
    {
      sno: 4,
      shift: 'Morning',
      location: 'Guntur',
      routeId: '8D',
      route: 'SVN Colony',
      startingPoint: 'SVN Colony',
      pickupPoints: 'SVN Colony - Gujjanagundla Centre'
    }
  ]);

  const [newStage, setNewStage] = useState<Stage>({
    sno: stages.length + 1,
    shift: '',
    location: '',
    routeId: '',
    route: '',
    startingPoint: '',
    pickupPoints: ''
  });

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentStage, setCurrentStage] = useState<Stage | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Set to true if sidebar should be open initially

  const handleOpen = () => {
    setEditMode(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentStage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editMode && currentStage) {
      setCurrentStage({ ...currentStage, [name]: value });
    } else {
      setNewStage({ ...newStage, [name]: value });
    }
  };

  const handleAddStage = () => {
    setStages([...stages, { ...newStage, sno: stages.length + 1 }]);
    setNewStage({
      sno: stages.length + 2,
      shift: '',
      location: '',
      routeId: '',
      route: '',
      startingPoint: '',
      pickupPoints: ''
    });
    handleClose();
  };

  const handleEditStage = (stage: Stage) => {
    setEditMode(true);
    setCurrentStage(stage);
    setOpen(true);
  };

  const handleUpdateStage = () => {
    if (currentStage) {
      setStages(
        stages.map((stage) =>
          stage.sno === currentStage.sno ? currentStage : stage
        )
      );
      handleClose();
    }
  };

  const handleDeleteStage = (sno: number) => {
    setStages(stages.filter((stage) => stage.sno !== sno));
  };

  return (
    <>
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
              '&:hover': {
                backgroundColor: '#333333'
              }
            }}
            startIcon={<AddIcon />}
            onClick={handleOpen}
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
                <TableCell sx={{ color: '#000000' }}>Location</TableCell>
                <TableCell sx={{ color: '#000000' }}>Route ID</TableCell>
                <TableCell sx={{ color: '#000000' }}>Route</TableCell>
                <TableCell sx={{ color: '#000000' }}>Starting Point</TableCell>
                <TableCell sx={{ color: '#000000' }}>Pickup Points</TableCell>
                <TableCell sx={{ color: '#000000' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stages.map((stage) => (
                <TableRow key={stage.sno}>
                  <TableCell sx={{ color: '#000000' }}>{stage.sno}</TableCell>
                  <TableCell sx={{ color: '#000000' }}>{stage.shift}</TableCell>
                  <TableCell sx={{ color: '#000000' }}>
                    {stage.location}
                  </TableCell>
                  <TableCell sx={{ color: '#000000' }}>
                    {stage.routeId}
                  </TableCell>
                  <TableCell sx={{ color: '#000000' }}>{stage.route}</TableCell>
                  <TableCell sx={{ color: '#000000' }}>
                    {stage.startingPoint}
                  </TableCell>
                  <TableCell sx={{ color: '#000000' }}>
                    {stage.pickupPoints}
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? 'Edit Route' : 'Add Route'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Shift"
            variant="outlined"
            name="shift"
            value={
              editMode && currentStage ? currentStage.shift : newStage.shift
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={
              editMode && currentStage
                ? currentStage.location
                : newStage.location
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Route ID"
            variant="outlined"
            name="routeId"
            value={
              editMode && currentStage ? currentStage.routeId : newStage.routeId
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Route"
            variant="outlined"
            name="route"
            value={
              editMode && currentStage ? currentStage.route : newStage.route
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Starting Point"
            variant="outlined"
            name="startingPoint"
            value={
              editMode && currentStage
                ? currentStage.startingPoint
                : newStage.startingPoint
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
          <TextField
            label="Pickup Points"
            variant="outlined"
            name="pickupPoints"
            value={
              editMode && currentStage
                ? currentStage.pickupPoints
                : newStage.pickupPoints
            }
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '8px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={editMode ? handleUpdateStage : handleAddStage}
            sx={{ backgroundColor: '#000000', color: '#ffffff' }}
          >
            {editMode ? 'Update Route' : 'Add Route'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BusStages;
