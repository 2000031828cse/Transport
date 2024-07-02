// // import React, { useState } from 'react';
// // import {
// //   Container,
// //   TextField,
// //   MenuItem,
// //   Button,
// //   Typography,
// //   Box,
// // } from '@mui/material';

// // interface BusStop {
// //   id: string;
// //   name: string;
// // }

// // const busStops: BusStop[] = [
// //   { id: '1', name: 'Main Street' },
// //   { id: '2', name: 'Central Park' },
// //   { id: '3', name: 'University' },
// //   { id: '4', name: 'Airport' },
// // ];

// // const BusPassRequest: React.FC = () => {
// //   const [userName, setUserName] = useState('');
// //   const [userId, setUserId] = useState('');
// //   const [selectedBusStop, setSelectedBusStop] = useState('');

// //   const handleSubmit = (event: React.FormEvent) => {
// //     event.preventDefault();
// //     alert(`Bus Pass Requested:
// //       Name: ${userName}
// //       ID: ${userId}
// //       Bus Stop: ${selectedBusStop}`);
// //   };

// //   return (
// //     <Container maxWidth="sm" sx={{ mt: 4 }}>
// //       <Typography variant="h4" gutterBottom>
// //         Request a Bus Pass
// //       </Typography>
// //       <Box component="form" onSubmit={handleSubmit} noValidate>
// //         <Box sx={{ mb: 2 }}>
// //           <TextField
// //             fullWidth
// //             label="Name"
// //             value={userName}
// //             onChange={(e) => setUserName(e.target.value)}
// //             required
// //           />
// //         </Box>
// //         <Box sx={{ mb: 2 }}>
// //           <TextField
// //             fullWidth
// //             label="ID"
// //             value={userId}
// //             onChange={(e) => setUserId(e.target.value)}
// //             required
// //           />
// //         </Box>
// //         <Box sx={{ mb: 2 }}>
// //           <TextField
// //             select
// //             fullWidth
// //             label="Bus Stop"
// //             value={selectedBusStop}
// //             onChange={(e) => setSelectedBusStop(e.target.value)}
// //             required
// //           >
// //             <MenuItem value="" disabled>
// //               Select a bus stop
// //             </MenuItem>
// //             {busStops.map((stop) => (
// //               <MenuItem key={stop.id} value={stop.name}>
// //                 {stop.name}
// //               </MenuItem>
// //             ))}
// //           </TextField>
// //         </Box>
// //         <Button type="submit" variant="contained" color="primary">
// //           Request Bus Pass
// //         </Button>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default BusPassRequest;

// import React, { useState } from 'react';
// import {
//   Container,
//   TextField,
//   MenuItem,
//   Button,
//   Typography,
//   Box
// } from '@mui/material';

// interface BusStop {
//   id: string;
//   name: string;
// }

// const busStops: BusStop[] = [
//   { id: '1', name: 'Main Street' },
//   { id: '2', name: 'Central Park' },
//   { id: '3', name: 'University' },
//   { id: '4', name: 'Airport' }
// ];

// const BusPassRequest: React.FC = () => {
//   const [userId, setUserId] = useState('');
//   const [selectedBusStop, setSelectedBusStop] = useState('');
//   const [otherBusStop, setOtherBusStop] = useState('');

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const busStop =
//       selectedBusStop === 'Others' ? otherBusStop : selectedBusStop;
//     alert(`Bus Pass Requested:
//       ID: ${userId}
//       Bus Stop: ${busStop}`);
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Request a Bus Pass
//       </Typography>
//       <Box component="form" onSubmit={handleSubmit} noValidate>
//         <Box sx={{ mb: 2 }}>
//           <TextField
//             fullWidth
//             label="ID"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             required
//           />
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <TextField
//             select
//             fullWidth
//             label="Bus Stop"
//             value={selectedBusStop}
//             onChange={(e) => setSelectedBusStop(e.target.value)}
//             required
//           >
//             <MenuItem value="" disabled>
//               Select a bus stop
//             </MenuItem>
//             {busStops.map((stop) => (
//               <MenuItem key={stop.id} value={stop.name}>
//                 {stop.name}
//               </MenuItem>
//             ))}
//             <MenuItem value="Others">Others</MenuItem>
//           </TextField>
//         </Box>
//         {selectedBusStop === 'Others' && (
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               fullWidth
//               label="Other Bus Stop"
//               value={otherBusStop}
//               onChange={(e) => setOtherBusStop(e.target.value)}
//               required
//             />
//           </Box>
//         )}
//         <Button type="submit" variant="contained" color="primary">
//           Request Bus Pass
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default BusPassRequest;

import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box
} from '@mui/material';

interface BusStop {
  id: string;
  name: string;
}

const busStops: BusStop[] = [
  { id: '1', name: 'Main Street' },
  { id: '2', name: 'Central Park' },
  { id: '3', name: 'University' },
  { id: '4', name: 'Airport' }
];

const semesters = ['Sem 1', 'Sem 2'];

const generateTermYears = (startYear: number, numberOfYears: number) => {
  const termYears = [];
  for (let i = 0; i < numberOfYears; i++) {
    const endYear = startYear + 1;
    termYears.push(`${startYear}-${endYear}`);
    startYear++;
  }
  return termYears;
};

const BusPassRequest: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedBusStop, setSelectedBusStop] = useState('');
  const [otherBusStop, setOtherBusStop] = useState('');
  const [termYears, setTermYears] = useState<string[]>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const generatedTermYears = generateTermYears(currentYear, 5);
    setTermYears(generatedTermYears);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const busStop =
      selectedBusStop === 'Others' ? otherBusStop : selectedBusStop;
    alert(`Bus Pass Requested:
      Term: ${selectedTerm}
      Semester: ${selectedSemester}
      Bus Stop: ${busStop}`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Request a Bus Pass
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            fullWidth
            label="Term ID"
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            required
          >
            <MenuItem value="" disabled>
              Select a term
            </MenuItem>
            {termYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {selectedTerm && (
          <Box sx={{ mb: 2 }}>
            <TextField
              select
              fullWidth
              label="Semester"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              required
            >
              <MenuItem value="" disabled>
                Select a semester
              </MenuItem>
              {semesters.map((semester) => (
                <MenuItem key={semester} value={semester}>
                  {semester}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
        <Box sx={{ mb: 2 }}>
          <TextField
            select
            fullWidth
            label="Bus Stop"
            value={selectedBusStop}
            onChange={(e) => setSelectedBusStop(e.target.value)}
            required
          >
            <MenuItem value="" disabled>
              Select a bus stop
            </MenuItem>
            {busStops.map((stop) => (
              <MenuItem key={stop.id} value={stop.name}>
                {stop.name}
              </MenuItem>
            ))}
            <MenuItem value="Others">Others</MenuItem>
          </TextField>
        </Box>
        {selectedBusStop === 'Others' && (
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Other Bus Stop"
              value={otherBusStop}
              onChange={(e) => setOtherBusStop(e.target.value)}
              required
            />
          </Box>
        )}
        <Button type="submit" variant="contained" color="primary">
          Request Bus Pass
        </Button>
      </Box>
    </Container>
  );
};

export default BusPassRequest;
