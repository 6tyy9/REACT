import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

   const currencyInfo =useCurrencyInfo(from)
  return (
    <>
     <h1 className='text-3xl bg-orange-500'>Cureency Converter</h1>
    </>
  )
}

export default App
