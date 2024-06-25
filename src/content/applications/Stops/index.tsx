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
//   Box
// } from '@mui/material';

// interface Stop {
//   number: number;
//   name: string;
// }

// const Stops: React.FC = () => {
//   const [stopName, setStopName] = useState<string>('');
//   const [stops, setStops] = useState<Stop[]>([]);

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

//     const newStops = [...stops, { number: stops.length + 1, name: stopName }];
//     setStops(newStops);
//     setStopName('');
//   };

//   const handleDeleteStop = (number: number) => {
//     const updatedStops = stops.filter((stop) => stop.number !== number);
//     // Recalculate the stop numbers
//     const recalculatedStops = updatedStops.map((stop, index) => ({
//       ...stop,
//       number: index + 1
//     }));
//     setStops(recalculatedStops);
//   };

//   return (
//     <Container>
//       <Box my={4}>
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '20px'
//           }}
//         >
//           <TextField
//             label="Stop Name"
//             variant="outlined"
//             value={stopName}
//             onChange={(e) => setStopName(e.target.value)}
//             style={{ marginRight: '10px' }}
//           />
//           <Button variant="contained" color="primary" onClick={handleAddStop}>
//             Add Stop
//           </Button>
//         </div>

//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Stop Number</TableCell>
//               <TableCell>Stop Name</TableCell>
//               <TableCell>Actions</TableCell>
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
//                     onClick={() => handleDeleteStop(stop.number)}
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

// src/content/applications/Stops/index.tsx
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
              <TableCell>Actions</TableCell>
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
