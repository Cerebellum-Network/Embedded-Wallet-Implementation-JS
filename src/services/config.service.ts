class ConfigService {
  private _identityServiceUrl: string;

  public async getServicesUrls(appId: string): Promise<void> {
    try {
      this._identityServiceUrl = process.env.IDENTITY_SERVICE_URL;
    } catch (error) {
      console.error('Internal error: failed to init SDK:', error);
    }
  }

  public get identityServiceUrl() {
    return this._identityServiceUrl;
  }
}

export default new ConfigService();
