class ContextService {
  private _appId: string;
  private _integrationPartnerUserId: string;

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
}

export default new ContextService();
