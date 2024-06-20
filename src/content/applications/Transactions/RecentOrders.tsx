import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/pass_request';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      Studentid:'1',
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      studentName: 'peter'
    },
    {
      id: '2',
      Studentid:'2',
      status: 'completed',
      orderID: '23M3UOG65G8K',
      studentName: 'chris'
    },
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
