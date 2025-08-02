import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../api.js'

const ProductDetail = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const data = await getProductById(id)
        console.log(data)
        setProduct(data)
        setLoading(false)
      }
      catch (error){
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }

    fetchProduct()
  },[id])

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <p className="text-3xl font-bold text-blue-600 mb-4">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="flex space-x-4">
              <Link 
                to={`/edit/${product.id}`}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Edit Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail