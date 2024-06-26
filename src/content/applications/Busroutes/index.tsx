// import React, { useState } from 'react';
// import {
//   Card,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   SelectChangeEvent
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { useStops } from '../Stops/StopsContext';

// interface Stage {
//   sno: number;
//   shift: string;
//   location: string;
//   routeId: string;
//   timings: string;
//   route: string;
//   startingPoint: string;
//   pickupPoints: string[];
// }

// const BusStages: React.FC = () => {
//   const { stops } = useStops();
//   const [stages, setStages] = useState<Stage[]>([
//     {
//       sno: 1,
//       shift: 'Morning',
//       location: 'Guntur',
//       routeId: '8A',
//       timings: '8:00 AM',
//       route: 'Gorantla',
//       startingPoint: 'Gorantla',
//       pickupPoints: ['Gorantla', 'Chilles']
//     },
//     {
//       sno: 2,
//       shift: 'Morning',
//       location: 'Guntur',
//       routeId: '8B',
//       timings: '8:00 AM',
//       route: 'Gorantla',
//       startingPoint: 'Medical Hostel',
//       pickupPoints: [
//         'Medical Hostel',
//         'Nagarulu',
//         'Vijaya Digital',
//         'Inner Ring Road'
//       ]
//     },
//     {
//       sno: 3,
//       shift: 'Morning',
//       location: 'Guntur',
//       routeId: '8C',
//       timings: '8:00 AM',
//       route: 'Lodge Center',
//       startingPoint: 'Lodge Center',
//       pickupPoints: [
//         'Lodge Center',
//         'SBI',
//         'Ala Hospital',
//         'AJ Gudi',
//         'Inner Ring Road'
//       ]
//     },
//     {
//       sno: 4,
//       shift: 'Morning',
//       location: 'Guntur',
//       routeId: '8D',
//       timings: '8:00 AM',
//       route: 'SVN Colony',
//       startingPoint: 'SVN Colony',
//       pickupPoints: ['SVN Colony', 'Gujjanagundla Centre']
//     }
//   ]);

//   const [newStage, setNewStage] = useState<Stage>({
//     sno: stages.length + 1,
//     shift: '',
//     location: '',
//     routeId: '',
//     route: '',
//     timings: '',
//     startingPoint: '',
//     pickupPoints: []
//   });

//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [currentStage, setCurrentStage] = useState<Stage | null>(null);

//   const handleOpen = () => {
//     setEditMode(false);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentStage(null);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (editMode && currentStage) {
//       setCurrentStage({ ...currentStage, [name]: value });
//     } else {
//       setNewStage({ ...newStage, [name]: value });
//     }
//   };

//   const handleAddStage = () => {
//     setStages([...stages, { ...newStage, sno: stages.length + 1 }]);
//     setNewStage({
//       sno: stages.length + 2,
//       shift: '',
//       location: '',
//       routeId: '',
//       timings: '',
//       route: '',
//       startingPoint: '',
//       pickupPoints: []
//     });
//     handleClose();
//   };

//   const handleEditStage = (stage: Stage) => {
//     setEditMode(true);
//     setCurrentStage(stage);
//     setOpen(true);
//   };

//   const handleUpdateStage = () => {
//     if (currentStage) {
//       setStages(
//         stages.map((stage) =>
//           stage.sno === currentStage.sno ? currentStage : stage
//         )
//       );
//       handleClose();
//     }
//   };

//   const handleDeleteStage = (sno: number) => {
//     setStages(stages.filter((stage) => stage.sno !== sno));
//   };

//   const handlePickupPointsChange = (event: SelectChangeEvent<string[]>) => {
//     const value = event.target.value as string[];
//     if (editMode && currentStage) {
//       setCurrentStage({ ...currentStage, pickupPoints: value });
//     } else {
//       setNewStage({ ...newStage, pickupPoints: value });
//     }
//   };

//   return (
//     <>
//       <Card
//         sx={{
//           backgroundColor: '#ffffff',
//           color: '#000000',
//           marginBottom: '16px'
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '16px'
//           }}
//         >
//           <Typography variant="h6">Bus Routes</Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#000000',
//               color: '#ffffff',
//               '&:hover': {
//                 backgroundColor: '#333333'
//               }
//             }}
//             startIcon={<AddIcon />}
//             onClick={handleOpen}
//           >
//             Add Route
//           </Button>
//         </Box>
//         <TableContainer>
//           <Table sx={{ minWidth: 650 }} aria-label="bus routes table">
//             <TableHead>
//               <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
//                 <TableCell sx={{ color: '#000000' }}>S.No</TableCell>
//                 <TableCell sx={{ color: '#000000' }}>Shift</TableCell>
//                 <TableCell sx={{ color: '#000000' }}>Route Name</TableCell>
//                 <TableCell sx={{ color: '#000000' }}>Timings</TableCell>
//                 {/* <TableCell sx={{ color: '#000000' }}>Route</TableCell> */}
//                 <TableCell sx={{ color: '#000000' }}>Starting Point</TableCell>
//                 <TableCell sx={{ color: '#000000' }}>Stops</TableCell>
//                 <TableCell sx={{ color: '#000000' }}>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {stages.map((stage) => (
//                 <TableRow key={stage.sno}>
//                   <TableCell sx={{ color: '#000000' }}>{stage.sno}</TableCell>
//                   <TableCell sx={{ color: '#000000' }}>{stage.shift}</TableCell>
//                   <TableCell sx={{ color: '#000000' }}>
//                     {stage.routeId}
//                   </TableCell>
//                   <TableCell sx={{ color: '#000000' }}>
//                     {stage.timings}
//                   </TableCell>
//                   {/* <TableCell sx={{ color: '#000000' }}>{stage.route}</TableCell> */}
//                   <TableCell sx={{ color: '#000000' }}>
//                     {stage.startingPoint}
//                   </TableCell>
//                   <TableCell sx={{ color: '#000000' }}>
//                     {stage.pickupPoints.join(' - ')}
//                   </TableCell>
//                   <TableCell>
//                     <IconButton
//                       color="primary"
//                       onClick={() => handleEditStage(stage)}
//                     >
//                       <EditIcon />
//                     </IconButton>
//                     <IconButton
//                       color="error"
//                       onClick={() => handleDeleteStage(stage.sno)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{editMode ? 'Edit Route' : 'Add Route'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Shift"
//             variant="outlined"
//             name="shift"
//             value={
//               editMode && currentStage ? currentStage.shift : newStage.shift
//             }
//             onChange={handleInputChange}
//             fullWidth
//             sx={{ marginBottom: '8px' }}
//           />
//           <TextField
//             label="Route ID"
//             variant="outlined"
//             name="routeId"
//             value={
//               editMode && currentStage ? currentStage.routeId : newStage.routeId
//             }
//             onChange={handleInputChange}
//             fullWidth
//             sx={{ marginBottom: '8px' }}
//           />
//           <TextField
//             label="Timings"
//             variant="outlined"
//             name="timings"
//             value={
//               editMode && currentStage ? currentStage.timings : newStage.timings
//             }
//             onChange={handleInputChange}
//             fullWidth
//             sx={{ marginBottom: '8px' }}
//           />
//           <TextField
//             label="Route"
//             variant="outlined"
//             name="route"
//             value={
//               editMode && currentStage ? currentStage.route : newStage.route
//             }
//             onChange={handleInputChange}
//             fullWidth
//             sx={{ marginBottom: '8px' }}
//           />
//           <TextField
//             label="Starting Point"
//             variant="outlined"
//             name="startingPoint"
//             value={
//               editMode && currentStage
//                 ? currentStage.startingPoint
//                 : newStage.startingPoint
//             }
//             onChange={handleInputChange}
//             fullWidth
//             sx={{ marginBottom: '8px' }}
//           />
//           <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//             <InputLabel id="pickup-points-label">Stops</InputLabel>
//             <Select
//               labelId="pickup-points-label"
//               id="pickup-points"
//               multiple
//               value={
//                 editMode && currentStage
//                   ? currentStage.pickupPoints
//                   : newStage.pickupPoints
//               }
//               onChange={handlePickupPointsChange}
//               fullWidth
//             >
//               {stops.map((stop) => (
//                 <MenuItem key={stop.number} value={stop.name}>
//                   {stop.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">
//             Cancel
//           </Button>
//           <Button
//             onClick={editMode ? handleUpdateStage : handleAddStage}
//             sx={{ backgroundColor: '#000000', color: '#ffffff' }}
//           >
//             {editMode ? 'Update Route' : 'Add Route'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default BusStages;\

// BusStages.js or BusStages.tsx
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
    <Card sx={{ backgroundColor: '#ffffff', color: '#000000', marginBottom: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
        <Typography variant="h6">Bus Routes</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#000000', color: '#ffffff', '&:hover': { backgroundColor: '#333333' } }}
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
                <TableCell sx={{ color: '#000000' }}>{stage.routeId}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{stage.timings}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{stage.startingPoint}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{stage.pickupPoints.join(' - ')}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditStage(stage)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteStage(stage.sno)}>
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
