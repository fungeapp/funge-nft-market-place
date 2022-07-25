import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useWeb3React } from '@web3-react/core'

import { ETH_CHAIN_ID } from '../../utils/constants'
import { metaMask } from '../../wallet/connector'

function ConnectModal({ handleClose }) {
  const wallet = useWeb3React()

  const handleConnect = () => {
    try {
      metaMask
        .activate(ETH_CHAIN_ID)
        .then(() => {
          handleClose()
        })
        .catch((e) => {
          console.log(e)
        })
    } catch (e) {
      console.log(e)
      metaMask.deactivate()
    }
  }

  const handleDisconnect = () => {
    try {
      metaMask.resetState()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal show={true} backdrop="static" onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="sub-heading">
          In order to make use of this application, you have to connect a
          wallet.
        </p>
        {wallet.isActive ? (
          <button
            className="signin-btn-adv sigin-card-btn"
            onClick={handleDisconnect}
          >
            <span className="btn-icon float-start">
              <img className="p-1" src="./assets/images/fox-trans.png" alt="" />
            </span>
            Disconnect
          </button>
        ) : (
          <button
            className="signin-btn-adv sigin-card-btn"
            onClick={handleConnect}
          >
            <span className="btn-icon float-start">
              <img className="p-1" src="./assets/images/fox-trans.png" />
            </span>
            Connect
          </button>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default ConnectModal
