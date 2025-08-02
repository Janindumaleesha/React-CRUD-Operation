import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../api.js'
import ProductForm from '../components/ProductForm.jsx'

const AddProduct = () => {

  const navigate = useNavigate()

  const handleSubmit = async (product) => {
    try{
      await addProduct(product)
      navigate('/')
    }
    catch (error){
      console.error('Error adding product:', error);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <ProductForm onSubmit={handleSubmit} isEditing={false} />
    </div>
  )
}

export default AddProduct