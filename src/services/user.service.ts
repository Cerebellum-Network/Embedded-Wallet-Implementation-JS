import contextService from './context.service';
import configService from './config.service';

interface User {
  publicKey: string;
  secret: string;
}

interface GetAccessTokenResponse {
  code: string;
  data: {
    accessToken: string;
  };
}

interface GetUserKeypairResponse {
  code: string;
  data: {
    publicKey: string;
    privateKey: string;
  };
}

class UserService {
  public async getUser(integrationPartnerUserId: string, token?: string): Promise<User> {
    const userWalletInLocalStorage = localStorage.getItem(integrationPartnerUserId);
    if (userWalletInLocalStorage) {
      return JSON.parse(userWalletInLocalStorage);
    } else {
      return await this.identifyUser(integrationPartnerUserId, token);
    }
  }

  private async identifyUser(integrationPartnerUserId: string, token?: string): Promise<User> {
    try {
      const accessToken = await this.getAccessToken(integrationPartnerUserId, token);
      const user = await this.getUserKeyPair(accessToken);
      localStorage.setItem(integrationPartnerUserId, JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Unable to identity user. Error: ', error);
      return null;
    }
  }

  private async getAccessToken(integrationPartnerUserId: string, token?: string): Promise<string> {
    const url = `${configService.identityServiceUrl}/onboarding/users`;
    const req: RequestInit = {
      method: 'POST',
      body: JSON.stringify({appId: contextService.appId.toString(), userId: integrationPartnerUserId}),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (token) {
      req.headers = {...req.headers, Authorization: `Bearer ${token}`};
    }
    const response: GetAccessTokenResponse = await (await fetch(url, req)).json();
    if (!response || response.code !== 'SUCCESS') {
      throw new Error('Failed to load access token');
    }
    return response.data.accessToken;
  }

  private async getUserKeyPair(token: string): Promise<User> {
    const response: GetUserKeypairResponse = await (
      await fetch(`${configService.identityServiceUrl}/onboarding/users`, {
        headers: new Headers({Authorization: `Bearer ${token}`}),
      })
    ).json();
    if (!response || response.code !== 'SUCCESS') {
      throw new Error('Failed to load user keys');
    }
    return {publicKey: response.data.publicKey, secret: response.data.privateKey};
  }
}

export default new UserService();
