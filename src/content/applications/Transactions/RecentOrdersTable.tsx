import React, { FC, useState, ChangeEvent } from 'react';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
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
import { PassOrder, PassOrderStatus } from 'src/models/pass_request';
import CheckIcon from '@mui/icons-material/Check';

// Import the ApprovalDialog component
import ApprovalDialog from './DialogueBox';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: PassOrder[];
}

interface Filters {
  status?: PassOrderStatus | null;
  paymentStatus?: 'paid' | 'not paid' | null;
}

const getStatusLabel = (PassOrderStatus: PassOrderStatus): JSX.Element => {
  const map = {
    rejected: {
      text: 'Rejected',
      color: 'error'
    },
    completed: {
      text: 'Approved',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    },
    active: {
      text: 'Active',
      color: 'success'
    }
  };

  const { text, color }: any = map[PassOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: PassOrder[],
  filters: Filters
): PassOrder[] => {
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
  cryptoOrders: PassOrder[],
  page: number,
  limit: number
): PassOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
    paymentStatus: null
  });
  const [orders, setOrders] = useState<PassOrder[]>(cryptoOrders);

  // State for managing dialog
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [currentOrder, setCurrentOrder] = useState<PassOrder | null>(null);

  // Function to handle opening and closing dialog
  const handleDialogOpen = (order: PassOrder) => {
    setCurrentOrder(order);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setCurrentOrder(null);
  };

  // Function to handle approval link click
  const handleApprovalClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    order: PassOrder
  ) => {
    event.preventDefault();
    handleDialogOpen(order);
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    PassOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(PassOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [...prevSelected, PassOrderId]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== PassOrderId)
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
    const newStatus = event.target.value as 'paid' | 'not paid';
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === cryptoOrderId) {
          if (newStatus === 'paid' && order.status === 'completed') {
            return { ...order, paymentStatus: newStatus, status: 'active' };
          }
          return { ...order, paymentStatus: newStatus };
        }
        return order;
      })
    );
  };

  const handleApprovalUpdate = (status: PassOrderStatus) => {
    if (currentOrder) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === currentOrder.id ? { ...order, status } : order
        )
      );
      handleDialogClose();
    }
  };

  const filteredCryptoOrders = applyFilters(orders, filters);
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

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Approved'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'rejected',
      name: 'Rejected'
    },
    {
      id: 'active',
      name: 'Active'
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
      value = event.target.value as 'paid' | 'not paid';
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      paymentStatus: value
    }));
  };

  return (
    <Card>
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
        title="Recent Orders"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Stop</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => (
              <TableRow key={cryptoOrder.orderID}>
                <TableCell>{cryptoOrder.orderID}</TableCell>
                <TableCell>{cryptoOrder.Studentid}</TableCell>
                <TableCell>{cryptoOrder.studentName}</TableCell>
                <TableCell>{cryptoOrder.Stop}</TableCell>
                <TableCell align="center">
                  <Select
                    value={cryptoOrder.paymentStatus}
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
                    <a
                      href="#"
                      onClick={(event) =>
                        handleApprovalClick(event, cryptoOrder)
                      }
                    >
                      Approval
                    </a>
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {getStatusLabel(cryptoOrder.status)}
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Update Payment Status" arrow>
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
                      <CheckIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
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

      {/* ApprovalDialog component integrated here */}
      <ApprovalDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSave={handleApprovalUpdate}
      />
    </Card>
  );
};

export default RecentOrdersTable;
