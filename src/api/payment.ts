import paymentService from '../services/payment.service';

const payment = async (destinationAccount: string, asset: string, amount: string) => {
  return paymentService.sendPayment(destinationAccount, asset, amount);
};

export default payment;
