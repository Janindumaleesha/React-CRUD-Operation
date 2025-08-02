import React, { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../api.js'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'

const ProductList = () => {

  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const data = await getProducts()
        setproducts(data)
        setloading(false)
      }
      catch (error){
        console.error('Error fetching products:', error)
        setloading(false)
      }
    }
    fetchProducts()
  },[])

  const handleDelete = async (id) => {
    try{
      await deleteProduct(id)
      setproducts(products.filter(product => product.id !== id))
    }
    catch (error){
      console.error('Error deleting product:', error)
    }
  }

  if (loading){
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link 
          to="/add" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList