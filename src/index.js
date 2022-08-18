import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import env from 'react-dotenv'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import { MoralisProvider } from 'react-moralis'
import { Web3ReactProvider } from '@web3-react/core'

import { metaMaskHooks, metaMask } from './wallet/connector'
import { walletConnectHooks, walletConnect } from './wallet/connector'
import { WalletContextProvider } from './contexts/WalletContext'

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      <WalletContextProvider>
        <App />
      </WalletContextProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
