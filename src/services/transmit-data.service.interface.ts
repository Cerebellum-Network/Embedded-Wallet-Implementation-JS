export interface TransmitDataServiceInterface {
  transmitData(
    destinationPublicKey: string,
    signatureValues: string,
    signature: string,
    reference: string,
  ): Promise<string>;
}
