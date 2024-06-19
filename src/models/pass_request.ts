export type CryptoOrderStatus = 'completed' | 'pending' | 'rejected';

export interface CryptoOrder {
  id: string;
  Studentid: string;
  status: CryptoOrderStatus;
  orderID: string;
  studentName: string;
  sourceDesc: string;
  amountCrypto: number;
  amount: number;
  cryptoCurrency: string;
  currency: string;
}
