import { useState, useEffect } from 'react'

export const WALLET_DISCONNECTED_KEY = 'WalletDisconnected'

export const getItem = (key, defaultValue = null) => {
  try {
    return JSON.parse(localStorage?.getItem(key)) ?? defaultValue
  } catch (e) {
    return defaultValue
  }
}

export const setItem = (key, value) => {
  localStorage?.setItem(key, JSON.stringify(value))
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(getItem(key)) ?? defaultValue
  })

  useEffect(() => {
    setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
