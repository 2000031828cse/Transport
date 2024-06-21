export type PassOrderStatus = 'completed' | 'pending' | 'rejected';

export interface PassOrder {
  paymentStatus: 'paid' | 'not Paid';
  id: string;
  Studentid: string;
  status: PassOrderStatus;
  orderID: string;
  studentName: string;
  approvalStatus: 'approval' | 'reject';
}
