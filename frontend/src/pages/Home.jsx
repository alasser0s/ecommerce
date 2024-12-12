import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] bg-gradient-to-r from-primary-cream to-accent-taupe/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-charcoal">
                Discover Unique <br/>
                <span className="text-accent-taupe">Treasures</span>
              </h1>
              <p className="text-lg text-accent-taupe/80">
                Explore our curated collection of handpicked items from around the world.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary-charcoal text-primary-cream px-8 py-4 rounded-xl
                         flex items-center gap-3 hover:bg-secondary-charcoal-hover transition-colors"
              >
                Shop Now
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img 
                src="/hero-image.jpg" 
                alt="Featured Products"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">
              Popular Categories
            </h2>
            <p className="text-accent-taupe">Find what you're looking for</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.itemCount} items</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-secondary-charcoal mb-4">
                Trending Now
              </h2>
              <p className="text-accent-taupe">Our most popular products</p>
            </div>
            <button className="text-accent-taupe hover:text-secondary-charcoal flex items-center gap-2">
              View All
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Your ProductCard components will go here */}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img 
                src="/offer-bg.jpg" 
                alt="Special Offer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary-charcoal/70" />
            </div>
            <div className="relative py-24 px-8 md:px-12 flex flex-col items-center text-center">
              <SparklesIcon className="w-12 h-12 text-primary-cream mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-cream mb-6">
                Special Offer
              </h2>
              <p className="text-xl text-primary-cream/90 mb-8">
                Get 20% off on your first purchase
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-cream text-secondary-charcoal px-8 py-4 rounded-xl
                         font-medium hover:bg-white transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary-charcoal/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-secondary-charcoal">
              Stay Updated
            </h2>
            <p className="text-accent-taupe">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-accent-taupe/20
                         focus:ring-2 focus:ring-secondary-charcoal focus:border-transparent
                         outline-none"
              />
              <button className="bg-secondary-charcoal text-primary-cream px-6 py-3
                               rounded-xl hover:bg-secondary-charcoal-hover transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  { name: 'Electronics', image: '/categories/electronics.jpg', itemCount: 120 },
  { name: 'Fashion', image: '/categories/fashion.jpg', itemCount: 350 },
  { name: 'Home & Living', image: '/categories/home.jpg', itemCount: 200 },
];

export default Home; 