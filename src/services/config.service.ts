import {ConfigServiceInterface} from "./config.service.interface";

class ConfigService implements ConfigServiceInterface {
  private _identityServiceUrl: string;
  private _blockchainGatewayUrl: string;

  public async getServicesUrls(): Promise<void> {
    try {
      this._identityServiceUrl = process.env.IDENTITY_SERVICE_URL;
      this._blockchainGatewayUrl = process.env.BLOCKCHAIN_API_GATEWAY;
    } catch (error) {
      console.error('Internal error: failed to init SDK:', error);
    }
  }

  public get identityServiceUrl() {
    return this._identityServiceUrl;
  }

  public get blockchainGatewayUrl() {
    return this._blockchainGatewayUrl;
  }
}

export default new ConfigService();
