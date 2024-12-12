import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTruck, FiCreditCard, FiPackage, FiHeadphones } from 'react-icons/fi';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const features = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders over $100'
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: 'Secure Payment',
      description: '100% secure payment'
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '30 days return policy'
    },
    {
      icon: <FiHeadphones className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Dedicated support'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[600px] bg-gradient-to-r from-primary-600 to-primary-800"
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              Discover Amazing Products
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Shop the latest trends with our curated collection of premium products
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/products" 
                className="btn-primary text-lg px-8 py-3"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our most popular items</p>
        </div>
        <FeaturedProducts />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600">Find exactly what you're looking for</p>
        </div>
        <CategorySection />
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
