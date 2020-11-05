export interface PaymentServiceInterface {
  rewardUser(destinationAccount: string, asset: string, amount: string): Promise<string>;
}
