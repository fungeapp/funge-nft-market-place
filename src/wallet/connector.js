import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';

import { getItem, setItem } from '../hooks/useLocalStorage';

export const POLLING_INTERVAL = 25000;
export const BALANCE_INTERVAL = 60000;

const CONNECTOR_KEY = 'LAST_WALLET_CONNECTOR';

export const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/012fa2e09d02460bb9c843aa1166ca32',
};

export const setLastConnector = (connector) => {
  setItem(CONNECTOR_KEY, connector);
};

export const getLastConnector = () => {
  return getItem(CONNECTOR_KEY);
};

export const [metaMask, metaMaskHooks] = initializeConnector((actions) => new MetaMask({actions}));

export const [walletConnect, walletConnectHooks] = initializeConnector(
  (actions) =>
    new WalletConnect({actions, options: {
      rpc: RPC_URLS,
    }}),
  Object.keys(RPC_URLS).map((chainId) => Number(chainId))
);
