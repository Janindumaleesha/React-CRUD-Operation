import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product, onDelete}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-contain bg-white p-4"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{product.title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
        
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`} 
            className="text-blue-500 hover:text-blue-700"
          >
            View
          </Link>
          <div className="space-x-2">
            <Link 
              to={`/edit/${product.id}`}
              className="text-green-500 hover:text-green-700"
            >
              Edit
            </Link>
            <button 
              onClick={() => onDelete(product.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard