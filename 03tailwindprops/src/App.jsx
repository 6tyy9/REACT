import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-950 text-black p-4 rounded-full'>Tailwind test</h1>
       <Card username="Shivanshu" btnText="Clickme"/>
       <Card username="Rawat" btnText="Visit me"/>
    </>
  )
}

export default App
