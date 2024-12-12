import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.products);
  const featuredProducts = products?.slice(0, 8) || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
            <Link to={`/product/${product._id}`}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                    -{product.discount}%
                  </div>
                )}
              </div>
            </Link>
            
            {/* Quick action buttons */}
            <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors">
                <FiHeart className="w-5 h-5 text-gray-600 hover:text-primary-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors">
                <FiShoppingCart className="w-5 h-5 text-gray-600 hover:text-primary-600" />
              </button>
            </div>

            <div className="p-4">
              <Link to={`/product/${product._id}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
