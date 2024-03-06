import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Main/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import { Route, Routes } from 'react-router-dom'
import CatalogItemPage from './components/Catalog/CatalogItemPage/CatalogItemPage'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/:id" element={<CatalogItemPage/>}/>
      </Routes>
    </>
  )
}

export default App
