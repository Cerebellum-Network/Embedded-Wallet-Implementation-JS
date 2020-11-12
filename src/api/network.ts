import contextService from "../services/context.service";

const setNetwork = async (network: string) => {
  contextService.network = network;
};

export {setNetwork};
