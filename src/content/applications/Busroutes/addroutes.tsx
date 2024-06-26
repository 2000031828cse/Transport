// // import React, { useState, useEffect } from 'react';
// // import {
// //   TextField,
// //   Button,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Box,
// //   Typography,
// //   SelectChangeEvent
// // } from '@mui/material';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { useStops } from '../Stops/StopsContext';
// // import { useBusRoutes } from './BusRoutesContext';

// // const AddRoute: React.FC = () => {
// //   const { stops } = useStops();
// //   const { addStage, updateStage, stages } = useBusRoutes();
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const searchParams = new URLSearchParams(location.search);
// //   const editSno = searchParams.get('edit');

// //   const initialStage = {
// //     sno: stages.length + 1,
// //     shift: '',
// //     location: '',
// //     routeId: '',
// //     timings: '',
// //     route: '',
// //     startingPoint: '',
// //     stops: []
// //   };

// //   const [newStage, setNewStage] = useState(initialStage);
// //   const [selectedStops, setSelectedStops] = useState<string[]>(['']);
// //   const [showAddButton, setShowAddButton] = useState(true);

// //   useEffect(() => {
// //     if (editSno) {
// //       const stageToEdit = stages.find(
// //         (stage) => stage.sno === parseInt(editSno)
// //       );
// //       if (stageToEdit) {
// //         setNewStage(stageToEdit);
// //         setSelectedStops(stageToEdit.stops);
// //       }
// //     }
// //   }, [editSno, stages]);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setNewStage({ ...newStage, [name]: value });
// //   };

// //   const handleStopChange = (
// //     index: number,
// //     event: SelectChangeEvent<string>
// //   ) => {
// //     const value = event.target.value as string;
// //     const newSelectedStops = [...selectedStops];
// //     newSelectedStops[index] = value;
// //     setSelectedStops(newSelectedStops);
// //     setNewStage({ ...newStage, stops: newSelectedStops });
// //   };

// //   const addNewStopField = () => {
// //     setSelectedStops([...selectedStops, '']);
// //   };

// //   const handleAddOrUpdateStage = () => {
// //     if (editSno) {
// //       updateStage(newStage);
// //     } else {
// //       addStage(newStage);
// //     }
// //     navigate('/management/busstages');
// //   };

// //   const handleCancel = () => {
// //     navigate('/management/busstages');
// //   };

// //   return (
// //     <Box sx={{ padding: '16px' }}>
// //       <Typography variant="h6">
// //         {editSno ? 'Edit Route' : 'Add Route'}
// //       </Typography>
// //       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
// //         <TextField
// //           label="Shift"
// //           variant="outlined"
// //           name="shift"
// //           value={newStage.shift}
// //           onChange={handleInputChange}
// //           fullWidth
// //           sx={{ marginBottom: '8px' }}
// //         />
// //       </FormControl>
// //       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
// //         <TextField
// //           label="Route ID"
// //           variant="outlined"
// //           name="routeId"
// //           value={newStage.routeId}
// //           onChange={handleInputChange}
// //           fullWidth
// //           sx={{ marginBottom: '8px' }}
// //         />
// //       </FormControl>
// //       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
// //         <TextField
// //           label="Timings"
// //           variant="outlined"
// //           name="timings"
// //           value={newStage.timings}
// //           onChange={handleInputChange}
// //           fullWidth
// //           sx={{ marginBottom: '8px' }}
// //         />
// //       </FormControl>
// //       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
// //         <TextField
// //           label="Route"
// //           variant="outlined"
// //           name="route"
// //           value={newStage.route}
// //           onChange={handleInputChange}
// //           fullWidth
// //           sx={{ marginBottom: '8px' }}
// //         />
// //       </FormControl>
// //       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
// //         <TextField
// //           label="Starting Point"
// //           variant="outlined"
// //           name="startingPoint"
// //           value={newStage.startingPoint}
// //           onChange={handleInputChange}
// //           fullWidth
// //           sx={{ marginBottom: '8px' }}
// //         />
// //       </FormControl>
// //       <Typography variant="body1" sx={{ marginBottom: '8px' }}>
// //         Stops
// //       </Typography>
// //       {selectedStops.map((stop, index) => (
// //         <FormControl key={index} fullWidth sx={{ marginBottom: '8px' }}>
// //           <InputLabel id={`stop-label-${index}`}>Stop {index + 1}</InputLabel>
// //           <Select
// //             labelId={`stop-label-${index}`}
// //             value={stop}
// //             onChange={(event) =>
// //               handleStopChange(index, event as SelectChangeEvent<string>)
// //             }
// //             fullWidth
// //           >
// //             {stops
// //               .filter((s) => !selectedStops.includes(s.name) || s.name === stop)
// //               .map((filteredStop) => (
// //                 <MenuItem key={filteredStop.number} value={filteredStop.name}>
// //                   {filteredStop.name}
// //                 </MenuItem>
// //               ))}
// //           </Select>
// //         </FormControl>
// //       ))}
// //       {showAddButton && (
// //         <Button
// //           onClick={addNewStopField}
// //           sx={{
// //             backgroundColor: '#000000',
// //             color: '#ffffff',
// //             marginBottom: '8px'
// //           }}
// //         >
// //           +
// //         </Button>
// //       )}
// //       <Button
// //         onClick={handleAddOrUpdateStage}
// //         sx={{
// //           backgroundColor: '#000000',
// //           color: '#ffffff',
// //           marginRight: '8px'
// //         }}
// //       >
// //         {editSno ? 'Update Route' : 'Add Route'}
// //       </Button>
// //       <Button onClick={handleCancel} color="secondary">
// //         Cancel
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default AddRoute;

// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
//   Typography,
//   SelectChangeEvent
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useStops } from '../Stops/StopsContext';
// import { useBusRoutes } from './BusRoutesContext';

// const AddRoute: React.FC = () => {
//   const { stops } = useStops();
//   const { addStage, updateStage, stages } = useBusRoutes();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const editSno = searchParams.get('edit');

//   const initialStage = {
//     sno: stages.length + 1,
//     shift: '',
//     location: '',
//     routeId: '',
//     timings: '',
//     route: '',
//     startingPoint: '',
//     stops: []
//   };

//   const [newStage, setNewStage] = useState(initialStage);
//   const [selectedStops, setSelectedStops] = useState<string[]>(['']);
//   const [showAddButton, setShowAddButton] = useState(true);

//   useEffect(() => {
//     if (editSno) {
//       const stageToEdit = stages.find(
//         (stage) => stage.sno === parseInt(editSno)
//       );
//       if (stageToEdit) {
//         setNewStage(stageToEdit);
//         setSelectedStops(stageToEdit.stops);
//       }
//     }
//   }, [editSno, stages]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewStage({ ...newStage, [name]: value });
//   };

//   const handleStopChange = (
//     index: number,
//     event: SelectChangeEvent<string>
//   ) => {
//     const value = event.target.value as string;
//     const newSelectedStops = [...selectedStops];
//     newSelectedStops[index] = value;
//     setSelectedStops(newSelectedStops);
//     setNewStage({ ...newStage, stops: newSelectedStops });
//   };

//   const addNewStopField = () => {
//     setSelectedStops([...selectedStops, '']);
//   };

//   const handleAddOrUpdateStage = () => {
//     const sortedStops = selectedStops
//       .filter((stop) => stop)
//       .sort((a, b) => {
//         const stopA = stops.find((s) => s.name === a);
//         const stopB = stops.find((s) => s.name === b);
//         return (stopA?.number ?? 0) - (stopB?.number ?? 0);
//       });
//     const updatedStage = { ...newStage, stops: sortedStops };
//     if (editSno) {
//       updateStage(updatedStage);
//     } else {
//       addStage(updatedStage);
//     }
//     navigate('/management/busstages');
//   };

//   const handleCancel = () => {
//     navigate('/management/busstages');
//   };

//   return (
//     <Box sx={{ padding: '16px' }}>
//       <Typography variant="h6">
//         {editSno ? 'Edit Route' : 'Add Route'}
//       </Typography>
//       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//         <TextField
//           label="Shift"
//           variant="outlined"
//           name="shift"
//           value={newStage.shift}
//           onChange={handleInputChange}
//           fullWidth
//           sx={{ marginBottom: '8px' }}
//         />
//       </FormControl>
//       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//         <TextField
//           label="Route ID"
//           variant="outlined"
//           name="routeId"
//           value={newStage.routeId}
//           onChange={handleInputChange}
//           fullWidth
//           sx={{ marginBottom: '8px' }}
//         />
//       </FormControl>
//       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//         <TextField
//           label="Timings"
//           variant="outlined"
//           name="timings"
//           value={newStage.timings}
//           onChange={handleInputChange}
//           fullWidth
//           sx={{ marginBottom: '8px' }}
//         />
//       </FormControl>
//       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//         <TextField
//           label="Route"
//           variant="outlined"
//           name="route"
//           value={newStage.route}
//           onChange={handleInputChange}
//           fullWidth
//           sx={{ marginBottom: '8px' }}
//         />
//       </FormControl>
//       <FormControl fullWidth sx={{ marginBottom: '8px' }}>
//         <TextField
//           label="Starting Point"
//           variant="outlined"
//           name="startingPoint"
//           value={newStage.startingPoint}
//           onChange={handleInputChange}
//           fullWidth
//           sx={{ marginBottom: '8px' }}
//         />
//       </FormControl>
//       <Typography variant="body1" sx={{ marginBottom: '8px' }}>
//         Stops
//       </Typography>
//       {selectedStops.map((stop, index) => (
//         <FormControl key={index} fullWidth sx={{ marginBottom: '8px' }}>
//           <InputLabel id={`stop-label-${index}`}>Stop {index + 1}</InputLabel>
//           <Select
//             labelId={`stop-label-${index}`}
//             value={stop}
//             onChange={(event) =>
//               handleStopChange(index, event as SelectChangeEvent<string>)
//             }
//             fullWidth
//           >
//             {stops
//               .filter((s) => !selectedStops.includes(s.name) || s.name === stop)
//               .map((filteredStop) => (
//                 <MenuItem key={filteredStop.number} value={filteredStop.name}>
//                   {filteredStop.number}. {filteredStop.name}
//                 </MenuItem>
//               ))}
//           </Select>
//         </FormControl>
//       ))}
//       {showAddButton && (
//         <Button
//           onClick={addNewStopField}
//           sx={{
//             backgroundColor: '#000000',
//             color: '#ffffff',
//             marginBottom: '8px'
//           }}
//         >
//           +
//         </Button>
//       )}
//       <Button
//         onClick={handleAddOrUpdateStage}
//         sx={{
//           backgroundColor: '#000000',
//           color: '#ffffff',
//           marginRight: '8px'
//         }}
//       >
//         {editSno ? 'Update Route' : 'Add Route'}
//       </Button>
//       <Button onClick={handleCancel} color="secondary">
//         Cancel
//       </Button>
//     </Box>
//   );
// };

// export default AddRoute;

import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  SelectChangeEvent
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
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [showAddButton, setShowAddButton] = useState(true);

  useEffect(() => {
    if (editSno) {
      const stageToEdit = stages.find(
        (stage) => stage.sno === parseInt(editSno)
      );
      if (stageToEdit) {
        setNewStage(stageToEdit);
        setSelectedStops(stageToEdit.stops);
      }
    }
  }, [editSno, stages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStage({ ...newStage, [name]: value });
  };

  const handleStopChange = (
    index: number,
    event: SelectChangeEvent<string>
  ) => {
    const value = event.target.value as string;
    const newSelectedStops = [...selectedStops];
    newSelectedStops[index] = value;
    setSelectedStops(newSelectedStops);
    setNewStage({ ...newStage, stops: newSelectedStops });
  };

  const addNewStopField = () => {
    setSelectedStops([...selectedStops, '']);
  };

  const handleAddOrUpdateStage = () => {
    const sortedStops = selectedStops
      .filter((stop) => stop)
      .sort((a, b) => {
        const stopA = stops.find((s) => s.name === a);
        const stopB = stops.find((s) => s.name === b);
        return (stopA?.number ?? 0) - (stopB?.number ?? 0);
      });
    const updatedStage = { ...newStage, stops: sortedStops };
    if (editSno) {
      updateStage(updatedStage);
    } else {
      addStage(updatedStage);
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
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Stops
      </Typography>
      {selectedStops.map((stop, index) => (
        <FormControl key={index} fullWidth sx={{ marginBottom: '8px' }}>
          <InputLabel id={`stop-label-${index}`}>Stop {index + 1}</InputLabel>
          <Select
            labelId={`stop-label-${index}`}
            value={stop}
            onChange={(event) =>
              handleStopChange(index, event as SelectChangeEvent<string>)
            }
            fullWidth
          >
            {stops
              .filter((s) => !selectedStops.includes(s.name) || s.name === stop)
              .map((filteredStop) => (
                <MenuItem key={filteredStop.number} value={filteredStop.name}>
                  {filteredStop.number}. {filteredStop.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      ))}
      {/* <Button
        onClick={addNewStopField}
        sx={{
          fontSize: '50px',
          color: '#000000',
          marginBottom: '8px'
        }}
      >
        +
      </Button>
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
      </Button>*/}

      <Button
        onClick={addNewStopField}
        sx={{
          fontSize: '30px',
          color: '#000000',
          marginBottom: '8px'
        }}
      >
        +
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '8px'
        }}
      >
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
    </Box>
  );
};

export default AddRoute;
