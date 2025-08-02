import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, updateProduct } from '../api.js'
import ProductForm from '../components/ProductForm.jsx'

const EditProduct = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const data = await getProductById(id)
        setProduct(data)
      }
      catch (error){
        console.error('Error fetching product:', error)
      }
    }

    fetchProduct()
  },[id])

  const handleSubmit = async (updatedProduct) => {
    try{
      await updateProduct(id, updatedProduct)
      navigate(`/product/${id}`)
    }
    catch (error){
      console.error('Error updating product:', error)
    }
  }

  if (!product){
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <ProductForm 
        initialProduct={product} 
        onSubmit={handleSubmit} 
        isEditing={true} 
      />
    </div>
  )
}

export default EditProduct