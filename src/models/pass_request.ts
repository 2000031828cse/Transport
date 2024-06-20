export type PassOrderStatus = 'completed' | 'pending' | 'rejected';

export interface CryptoOrder {
  id: string;
  Studentid: string;
  status: PassOrderStatus;
  orderID: string;
  studentName: string;
}
