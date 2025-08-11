import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
let  myObj = {
  username : "mohd altamash",
  age : 23
}
  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4 p-'>Tailwind Testing</h1>
      
      <Card username="Andyquinn" btntext='Click me'/>
      <Card username="Geekydev"  />
      </>
  )
}

export default App
