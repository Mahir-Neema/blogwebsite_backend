import { useState } from 'react'
import './App.css'
import Topbar from './Topbar/Topbar'
import Header from './Header/Header'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <Home/>
    </>
  )
}

export default App
