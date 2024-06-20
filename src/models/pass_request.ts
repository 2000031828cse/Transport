export type PassOrderStatus = 'completed' | 'pending' | 'rejected';

export interface CryptoOrder {
  paymentStatus: 'paid' | 'not Paid';
  id: string;
  Studentid: string;
  status: PassOrderStatus;
  orderID: string;
  studentName: string;
  approvalStatus: 'approved' | 'rejected' | 'pending';
}
