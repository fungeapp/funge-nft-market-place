import { createContext, useContext, useState } from 'react'

const WalletContext = createContext()

const WalletContextProvider = ({ children }) => {
  const [connectModalOpen, setConnectModalOpen] = useState(false)
  const [txError, setTxError] = useState(undefined)
  const [tx, setTx] = useState(undefined)
  const [processingModalOpen, setProcessingModalOpen] = useState(false)
  const [txStatus, setTxStatus] = useState(undefined)
  const [recentTxs, setRecentTxs] = useState([])
  const [newTx, setNewTx] = useState(undefined)
  const [txType, setTxType] = useState('')

  const addTransactionToRecentsAndShowModal = (
    tx,
    _reentrancyGuard,
    callback,
  ) => {
    setNewTx({ tx, reentrancyGuard: _reentrancyGuard, callback })
  }

  const showApprovalPending = (type) => {
    if (type) setTxType(type)
    setTxStatus('approval')
  }

  const value = {
    setConnectModalOpen,
    connectModalOpen,
    tx,
    setTx,
    txError,
    setTxError,
    processingModalOpen,
    setProcessingModalOpen,
    txStatus,
    setTxStatus,
    recentTxs,
    setRecentTxs,
    newTx,
    addTransactionToRecentsAndShowModal,
    showApprovalPending,
    txType,
  }

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}

const useWalletContext = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('WalletContext must be within a WalletContext Provider')
  }
  return context
}

export { WalletContextProvider, useWalletContext }
