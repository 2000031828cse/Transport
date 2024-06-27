// import React, { useState } from 'react';
// import {
//   Button,
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField,
//   Box,
//   Typography
// } from '@mui/material';
// import { useStops } from './StopsContext';

// const Stops: React.FC = () => {
//   const { stops, addStop, deleteStop } = useStops();
//   const [stopName, setStopName] = useState<string>('');

//   const handleAddStop = () => {
//     if (stopName.trim() === '') return;

//     // Check for duplicate stop names
//     if (
//       stops.some(
//         (stop) => stop.name.toLowerCase() === stopName.trim().toLowerCase()
//       )
//     ) {
//       alert('Stop name already exists!');
//       return;
//     }

//     addStop({ number: stops.length + 1, name: stopName });
//     setStopName('');
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         mt: 4,
//         p: 2,
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         backgroundColor: '#ffffff'
//       }}
//     >
//       <Typography variant="h5" align="center" sx={{ mb: 3 }}>
//         Manage Stops
//       </Typography>
//       <Box my={4}>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             mb: 3
//           }}
//         >
//           <TextField
//             label="Stop Name"
//             variant="outlined"
//             value={stopName}
//             onChange={(e) => setStopName(e.target.value)}
//             sx={{ mr: 2, flex: 1 }}
//           />
//           <Button variant="contained" color="primary" onClick={handleAddStop}>
//             Add Stop
//           </Button>
//         </Box>

//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <strong>Stop Number</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Stop Name</strong>
//               </TableCell>
//               <TableCell>
//                 <strong>Actions</strong>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {stops.map((stop) => (
//               <TableRow key={stop.number}>
//                 <TableCell>{stop.number}</TableCell>
//                 <TableCell>{stop.name}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => deleteStop(stop.number)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//     </Container>
//   );
// };

// export default Stops;


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
  Box,
  Typography
} from '@mui/material';
import { useStops } from './StopsContext';

const Stops: React.FC = () => {
  const { stops, addStop, deleteStop } = useStops();
  const [stopName, setStopName] = useState<string>('');

  const handleAddStop = () => {
    if (stopName.trim() === '') return;

    // Check for duplicate stop names
    if (
      stops.some(
        (stop) => stop.name.toLowerCase() === stopName.trim().toLowerCase()
      )
    ) {
      alert('Stop name already exists!');
      return;
    }

    addStop({ number: stops.length + 1, name: stopName });
    setStopName('');
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
        Manage Stops
      </Typography>
      <Box my={4}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 3
          }}
        >
          <TextField
            label="Stop Name"
            variant="outlined"
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
            sx={{ mr: 2, flex: 1 }}
          />
          <Button variant="contained" color="primary" onClick={handleAddStop}>
            Add Stop
          </Button>
        </Box>

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
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stops.map((stop) => (
              <TableRow key={stop.number}>
                <TableCell>{stop.number}</TableCell>
                <TableCell>{stop.name}</TableCell>
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
