import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import Footer from './assets/components/Footer/Footer'
import Banner from './assets/components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App
