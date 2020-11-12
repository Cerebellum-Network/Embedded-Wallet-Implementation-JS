import configService from './config.service';
import {TransmitDataServiceInterface} from "./transmit-data.service.interface";
import contextService from "./context.service";

interface TransmitDataResponse {
  code: string;
  data: {
    txHash: string;
  }
}

class TransmitDataService implements TransmitDataServiceInterface {
  public async transmitData(
    destinationPublicKey: string,
    signatureValues: string,
    signature: string,
    reference: string,
  ): Promise<string> {
    const url = `${configService.blockchainGatewayUrl}/substrate/transmitData`;
    const req: RequestInit = {
      method: 'POST',
      body: JSON.stringify({
          destinationPublicKey,
          signatureValues,
          signature,
          reference,
          network: contextService.network,
        }
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response: TransmitDataResponse = await (await fetch(url, req)).json();

    return response.data.txHash;
  }
}

export default new TransmitDataService();
