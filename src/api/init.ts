import configService from '../services/config.service';
import contextService from '../services/context.service';
import userService from '../services/user.service';

function validateArguments(appId: string, integrationPartnerUserId: string): boolean {
  if (!appId || typeof appId !== 'string') {
    return false;
  }
  if (!integrationPartnerUserId || typeof integrationPartnerUserId !== 'string') {
    return false;
  }
  return true;
}

const init = async (
  appId: string,
  integrationPartnerUserId: string,
  container?: HTMLElement,
  token?: string
): Promise<void> => {
  if (!validateArguments(appId, integrationPartnerUserId)) {
    console.error('Failed to initialize SDK. appId and integrationPartnerUserId are required parameters.');
    return;
  }

  await configService.getServicesUrls();

  contextService.appId = appId;
  contextService.integrationPartnerUserId = integrationPartnerUserId;

  const user = await userService.getUser(integrationPartnerUserId, token);

  if (!user) {
    return;
  }
};

export default init;
