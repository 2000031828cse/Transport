import React from 'react';
import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import { CryptoOrder, PassOrderStatus } from 'src/models/pass_request'; // Adjusted import to include CryptoOrder and PassOrderStatus

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      Studentid: '1',
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      studentName: 'peter',
      paymentStatus: 'paid' // Added paymentStatus
    },
    {
      id: '2',
      Studentid: '2',
      status: 'completed',
      orderID: '23M3UOG65G8K',
      studentName: 'chr',
      paymentStatus: 'paid' // Added paymentStatus
    }
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
