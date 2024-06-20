import React from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import { CryptoOrder } from 'src/models/pass_request'; // Adjusted import to include CryptoOrder

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      Studentid: '1',
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      studentName: 'Peter',
      paymentStatus: 'paid',
      approvalStatus: 'approved' // Added approvalStatus
    },
    {
      id: '2',
      Studentid: '2',
      status: 'completed',
      orderID: '23M3UOG65G8K',
      studentName: 'Chris',
      paymentStatus: 'paid',
      approvalStatus: 'rejected' // Added approvalStatus
    },
    {
      id: '3',
      Studentid: '3',
      status: 'pending',
      orderID: '4HJDV8HV34LM',
      studentName: 'John',
      paymentStatus: 'paid',
      approvalStatus: 'approved' // Added approvalStatus
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
