export interface PaymentServiceInterface {
  sendPayment(destinationAccount: string, asset: string, amount: string): Promise<string>;
}
