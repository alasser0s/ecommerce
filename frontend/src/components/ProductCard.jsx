import React from 'react';
import { HeartIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="group animate-fade-in bg-white dark:bg-accent-dark rounded-xl p-6 
                    transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-secondary-charcoal/90 backdrop-blur-sm text-primary-cream 
                         px-4 py-1.5 rounded-full text-sm font-medium animate-slide-up">
            New
          </span>
        )}
        
        <div className="absolute top-3 left-3 flex gap-2">
          {product.discount && (
            <span className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
              -{product.discount}%
            </span>
          )}
        </div>

        <button className="absolute right-4 bottom-0 translate-y-full opacity-0 
                         group-hover:translate-y-[-1rem] group-hover:opacity-100 
                         transition-all duration-300 bg-white/90 dark:bg-accent-dark/90 
                         backdrop-blur-sm p-2 rounded-full hover:bg-white 
                         dark:hover:bg-accent-dark-hover">
          <HeartIcon className="w-5 h-5 text-secondary-charcoal dark:text-primary-cream" />
        </button>
      </div>
      
      <div className="mt-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-secondary-charcoal dark:text-primary-cream font-semibold text-lg 
                       group-hover:text-secondary-charcoal-hover 
                       dark:group-hover:text-secondary-light-hover 
                       transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-accent-taupe">
            <StarIcon className="w-5 h-5" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-accent-taupe dark:text-accent-gray text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="space-y-1">
            <span className="text-secondary-charcoal font-bold text-lg">${product.price}</span>
            {product.oldPrice && (
              <span className="block text-accent-taupe line-through text-sm">${product.oldPrice}</span>
            )}
          </div>
          <button className="bg-secondary-charcoal hover:bg-secondary-charcoal-hover text-primary-cream 
                           px-5 py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5
                           flex items-center gap-2 font-medium">
            <ShoppingCartIcon className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
} 