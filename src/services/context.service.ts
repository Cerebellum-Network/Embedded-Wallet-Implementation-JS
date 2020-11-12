const DEFAULT_NETWORK = 'cere-testnet';

class ContextService {
  private _appId: string;
  private _integrationPartnerUserId: string;
  private _network: string = DEFAULT_NETWORK;

  public get appId(): string {
    return this._appId;
  }

  public set appId(id: string) {
    this._appId = id;
  }

  public get integrationPartnerUserId(): string {
    return this._integrationPartnerUserId;
  }

  public set integrationPartnerUserId(id: string) {
    this._integrationPartnerUserId = id;
  }

  public get network() {
    return this._network;
  }

  public set network(network: string) {
    this._network = network;
  }
}

export default new ContextService();
