import transmitDataService from '../services/transmit-data.service';
import configService from "../services/config.service";

const transmitData = async (
  destinationPublicKey: string,
  signatureValues: string,
  signature: string,
  reference: string,
) => {
  await configService.getServicesUrls();

  return transmitDataService.transmitData(destinationPublicKey, signatureValues, signature, reference);
};

export {transmitData};
