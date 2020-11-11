import configService from './config.service';
import {PaymentServiceInterface} from "./payment.service.interface";

interface PaymentResponse {
  code: string;
  data: {
    txHash: string;
  }
}

class PaymentService implements PaymentServiceInterface {
  public async rewardUser(destinationAccount: string, asset: string, amount: string): Promise<string> {
    const url = `${configService.blockchainGatewayUrl}/substrate/rewardUser`;
    const req: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
          userPublicKey: destinationAccount,
          asset,
          amount,
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response: PaymentResponse = await (await fetch(url, req)).json();

    return response.data.txHash;
  }
}

export default new PaymentService();
