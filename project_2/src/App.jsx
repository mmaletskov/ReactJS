import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Main/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import { Route, Routes } from 'react-router-dom'
import UsersPage from './components/UsersPage/UsersPage'
import CreatePage from './components/CreatePage/CreatePage'
import CatalogItemPage from './components/Catalog/CatalogItemPage/CatalogItemPage'
import Modal from './components/ModalWindow/ModalWindow'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/catalog/:id" element={<CatalogItemPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/modal" element={<Modal/>}/>
      </Routes>
    </>
  )
}

export default App
