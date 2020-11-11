import paymentService from '../services/payment.service';
import configService from "../services/config.service";

const rewardUser = async (destinationAccount: string, asset: string, amount: string) => {
  await configService.getServicesUrls();

  return paymentService.rewardUser(destinationAccount, asset, amount);
};

export {rewardUser};
