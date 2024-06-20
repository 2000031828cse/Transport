// // src/content/dashboard/Crypto/StudentTable.tsx
// import React from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Container,
//   Grid
// } from '@mui/material';

// const data = [
//   { reqId: 1, studentName: 'John Doe' },
//   { reqId: 2, studentName: 'Jane Smith' },
//   { reqId: 3, studentName: 'Alice Johnson' },
//   { reqId: 4, studentName: 'Chris Lee' }
// ];

// function StudentTable() {
//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="stretch"
//         spacing={4}
//       >
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 Student Requests
//               </Typography>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Req Id</TableCell>
//                     <TableCell>Student Name</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {data.map((row) => (
//                     <TableRow key={row.reqId}>
//                       <TableCell>{row.reqId}</TableCell>
//                       <TableCell>{row.studentName}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default StudentTable;

// src/content/dashboard/Crypto/StudentTable.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';

const data = [
  { reqId: 1, studentName: 'John Doe' },
  { reqId: 2, studentName: 'Jane Smith' },
  { reqId: 3, studentName: 'Alice Johnson' },
  { reqId: 4, studentName: 'Chris Lee' }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid rgba(224, 224, 224, 1)'
}));

function StudentTable() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h1" gutterBottom>
                Student Requests
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Req Id</StyledTableCell>
                    <StyledTableCell>Student Name</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.reqId}>
                      <StyledTableCell>{row.reqId}</StyledTableCell>
                      <StyledTableCell>{row.studentName}</StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StudentTable;
