import configService from './config.service';
import {PaymentServiceInterface} from "./payment.service.interface";

interface GetAccessTokenResponse {
  data: {
    txHash: string;
  };
}

class PaymentService implements PaymentServiceInterface {
  public async sendPayment(destinationAccount: string, asset: string, amount: string): Promise<string> {
    const url = `${configService.blockchainGatewayUrl}/payment`;
    const req: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
          destinationAccount,
          asset,
          amount,
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response: GetAccessTokenResponse = await (await fetch(url, req)).json();

    return response.data.txHash;
  }
}

export default new PaymentService();
