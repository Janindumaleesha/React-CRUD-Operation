import React from 'react'
import Home from './pages/Home.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='container mx-auto px-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App