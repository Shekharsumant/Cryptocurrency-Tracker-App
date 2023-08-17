import React, { Children, useContext, useState } from 'react'
import { createContext } from 'react'

const Crypto = createContext()

const CryptoContext = ({children}) => {

const [currency, setCurrency] = useState("INR")
const [symbol, setSymbol] = useState("")

  return (
    
      <Crypto.Provider>
        {children}
      </Crypto.Provider>

  )
}

export default CryptoContext

export const CryptoState = () => {
   return useContext(Crypto)
}
