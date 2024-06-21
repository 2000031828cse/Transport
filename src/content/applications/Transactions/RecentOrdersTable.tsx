// import { FC, ChangeEvent, useState } from 'react';
// import { format } from 'date-fns';
// import numeral from 'numeral';
// import PropTypes from 'prop-types';
// import {
//   Tooltip,
//   Divider,
//   Box,
//   FormControl,
//   InputLabel,
//   Card,
//   Checkbox,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TableContainer,
//   Select,
//   MenuItem,
//   Typography,
//   useTheme,
//   CardHeader
// } from '@mui/material';

// import Label from 'src/components/Label';
// import { CryptoOrder, PassOrderStatus } from 'src/models/pass_request';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// interface RecentOrdersTableProps {
//   className?: string;
//   cryptoOrders: CryptoOrder[];
// }

// interface Filters {
//   status?: PassOrderStatus;
// }

// const getStatusLabel = (cryptoOrderStatus: PassOrderStatus): JSX.Element => {
//   const map = {
//     rejected: {
//       text: 'rejected',
//       color: 'error'
//     },
//     completed: {
//       text: 'Completed',
//       color: 'success'
//     },
//     pending: {
//       text: 'Pending',
//       color: 'warning'
//     }
//   };

//   const { text, color }: any = map[cryptoOrderStatus];

//   return <Label color={color}>{text}</Label>;
// };

// const applyFilters = (
//   cryptoOrders: CryptoOrder[],
//   filters: Filters
// ): CryptoOrder[] => {
//   return cryptoOrders.filter((cryptoOrder) => {
//     let matches = true;

//     if (filters.status && cryptoOrder.status !== filters.status) {
//       matches = false;
//     }

//     return matches;
//   });
// };

// const applyPagination = (
//   cryptoOrders: CryptoOrder[],
//   page: number,
//   limit: number
// ): CryptoOrder[] => {
//   return cryptoOrders.slice(page * limit, page * limit + limit);
// };

// const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
//   const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
//     []
//   );
//   const selectedBulkActions = selectedCryptoOrders.length > 0;
//   const [page, setPage] = useState<number>(0);
//   const [limit, setLimit] = useState<number>(5);
//   const [filters, setFilters] = useState<Filters>({
//     status: null
//   });

//   const statusOptions = [
//     {
//       id: 'all',
//       name: 'All'
//     },
//     {
//       id: 'completed',
//       name: 'Completed'
//     },
//     {
//       id: 'pending',
//       name: 'Pending'
//     },
//     {
//       id: 'rejected',
//       name: 'rejected'
//     }
//   ];

//   const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     let value = null;

//     if (e.target.value !== 'all') {
//       value = e.target.value;
//     }

//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       status: value
//     }));
//   };

//   const handleSelectAllCryptoOrders = (
//     event: ChangeEvent<HTMLInputElement>
//   ): void => {
//     setSelectedCryptoOrders(
//       event.target.checked
//         ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
//         : []
//     );
//   };

//   const handleSelectOneCryptoOrder = (
//     event: ChangeEvent<HTMLInputElement>,
//     cryptoOrderId: string
//   ): void => {
//     if (!selectedCryptoOrders.includes(cryptoOrderId)) {
//       setSelectedCryptoOrders((prevSelected) => [
//         ...prevSelected,
//         cryptoOrderId
//       ]);
//     } else {
//       setSelectedCryptoOrders((prevSelected) =>
//         prevSelected.filter((id) => id !== cryptoOrderId)
//       );
//     }
//   };

//   const handlePageChange = (event: any, newPage: number): void => {
//     setPage(newPage);
//   };

//   const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     setLimit(parseInt(event.target.value));
//   };

//   const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
//   const paginatedCryptoOrders = applyPagination(
//     filteredCryptoOrders,
//     page,
//     limit
//   );
//   const selectedSomeCryptoOrders =
//     selectedCryptoOrders.length > 0 &&
//     selectedCryptoOrders.length < cryptoOrders.length;
//   const selectedAllCryptoOrders =
//     selectedCryptoOrders.length === cryptoOrders.length;
//   const theme = useTheme();

//   return (
//     <Card>
//       {selectedBulkActions && <Box flex={1} p={2}></Box>}
//       {!selectedBulkActions && (
//         <CardHeader
//           action={
//             <Box width={150}>
//               <FormControl fullWidth variant="outlined">
//                 <InputLabel>Status</InputLabel>
//                 <Select
//                   value={filters.status || 'all'}
//                   onChange={handleStatusChange}
//                   label="Status"
//                   autoWidth
//                 >
//                   {statusOptions.map((statusOption) => (
//                     <MenuItem key={statusOption.id} value={statusOption.id}>
//                       {statusOption.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Box>
//           }
//           title="Request Details"
//         />
//       )}
//       <Divider />
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox
//                   color="primary"
//                   checked={selectedAllCryptoOrders}
//                   indeterminate={selectedSomeCryptoOrders}
//                   onChange={handleSelectAllCryptoOrders}
//                 />
//               </TableCell>
//               <TableCell>O_ID </TableCell>
//               <TableCell>Student ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Payment status</TableCell>
//               <TableCell>Actions</TableCell>
//               <TableCell>Approval Status</TableCell>
//               <TableCell>Update</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {paginatedCryptoOrders.map((cryptoOrder) => {
//               const isCryptoOrderSelected = selectedCryptoOrders.includes(
//                 cryptoOrder.id
//               );
//               return (
//                 <TableRow
//                   hover
//                   key={cryptoOrder.orderID}
//                   selected={isCryptoOrderSelected}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       color="primary"
//                       checked={isCryptoOrderSelected}
//                       onChange={(event: ChangeEvent<HTMLInputElement>) =>
//                         handleSelectOneCryptoOrder(event, cryptoOrder.orderID)
//                       }
//                       value={isCryptoOrderSelected}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="body1"
//                       fontWeight="bold"
//                       color="text.primary"
//                       gutterBottom
//                       noWrap
//                     >
//                       {cryptoOrder.orderID}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       noWrap
//                     ></Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="body1"
//                       fontWeight="bold"
//                       color="text.primary"
//                       gutterBottom
//                       noWrap
//                     >
//                       {cryptoOrder.Studentid}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="body1"
//                       fontWeight="bold"
//                       color="text.primary"
//                       gutterBottom
//                       noWrap
//                     >
//                       {cryptoOrder.studentName}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       noWrap
//                     ></Typography>
//                   </TableCell>
//                   <TableCell align="center">
//                     <Typography
//                       variant="body1"
//                       fontWeight="bold"
//                       color="text.primary"
//                       gutterBottom
//                       noWrap
//                     ></Typography>
//                     <TableCell align="center">
//                       <Select
//                         value={cryptoOrder.paymentStatus}
//                         onChange={(event) => {}}
//                       >
//                         <MenuItem value="paid">Paid</MenuItem>
//                         <MenuItem value="not Paid">Not Paid</MenuItem>
//                       </Select>
//                     </TableCell>
//                   </TableCell>

//                   <TableCell align="center">
//                     <Typography variant="body1" color="text.primary">
//                       {cryptoOrder.approvalStatus === 'approval' && (
//                         <a href="#" onClick={(event) => {}}>
//                           Approved
//                         </a>
//                       )}
//                       {cryptoOrder.approvalStatus === 'reject' && (
//                         <a href="#" onClick={(event) => {}}>
//                           Rejected
//                         </a>
//                       )}
//                     </Typography>
//                   </TableCell>

//                   <TableCell align="center">
//                     {getStatusLabel(cryptoOrder.status)}
//                   </TableCell>
//                   <TableCell align="center">
//                     <Tooltip title="Edit Order" arrow>
//                       <IconButton
//                         sx={{
//                           '&:hover': {
//                             background: theme.colors.primary.lighter
//                           },
//                           color: theme.palette.primary.main
//                         }}
//                         color="inherit"
//                         size="small"
//                       >
//                         <EditTwoToneIcon fontSize="small" />
//                       </IconButton>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box p={2}>
//         <TablePagination
//           component="div"
//           count={filteredCryptoOrders.length}
//           onPageChange={handlePageChange}
//           onRowsPerPageChange={handleLimitChange}
//           page={page}
//           rowsPerPage={limit}
//           rowsPerPageOptions={[5, 10, 25, 30]}
//         />
//       </Box>
//     </Card>
//   );
// };

// RecentOrdersTable.propTypes = {
//   cryptoOrders: PropTypes.array.isRequired
// };

// RecentOrdersTable.defaultProps = {
//   cryptoOrders: []
// };

// export default RecentOrdersTable;

import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  SelectChangeEvent
} from '@mui/material';

import Label from 'src/components/Label';
import { CryptoOrder, PassOrderStatus } from 'src/models/pass_request';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: PassOrderStatus;
  paymentStatus?: string;
}

const getStatusLabel = (cryptoOrderStatus: PassOrderStatus): JSX.Element => {
  const map = {
    rejected: {
      text: 'Rejected',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    if (
      filters.paymentStatus &&
      cryptoOrder.paymentStatus !== filters.paymentStatus
    ) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
    paymentStatus: null
  });
  const [paymentStatusMap, setPaymentStatusMap] = useState<{
    [key: string]: string;
  }>(
    cryptoOrders.reduce((acc, order) => {
      acc[order.id] = order.paymentStatus;
      return acc;
    }, {})
  );

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'rejected',
      name: 'Rejected'
    }
  ];

  const handleStatusChange = (event: SelectChangeEvent<string>): void => {
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value as PassOrderStatus;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handlePaymentStatusChange = (
    event: SelectChangeEvent<string>
  ): void => {
    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      paymentStatus: value
    }));
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const handlePaymentStatusChangeForOrder = (
    event: SelectChangeEvent<string>,
    cryptoOrderId: string
  ): void => {
    const newStatus = event.target.value;
    setPaymentStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [cryptoOrderId]: newStatus
    }));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();

  return (
    <Card>
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box display="flex" gap={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Request Details"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>O_ID</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.orderID}
                  selected={isCryptoOrderSelected}
                >
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.orderID}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.Studentid}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.studentName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Select
                      value={paymentStatusMap[cryptoOrder.id]}
                      onChange={(event: SelectChangeEvent<string>) =>
                        handlePaymentStatusChangeForOrder(event, cryptoOrder.id)
                      }
                    >
                      <MenuItem value="paid">Paid</MenuItem>
                      <MenuItem value="not paid">Not Paid</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1" color="text.primary">
                      {cryptoOrder.approvalStatus === 'approval' && (
                        <a href="#" onClick={(event) => {}}>
                          Approved
                        </a>
                      )}
                      {cryptoOrder.approvalStatus === 'reject' && (
                        <a href="#" onClick={(event) => {}}>
                          Rejected
                        </a>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {getStatusLabel(cryptoOrder.status)}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
