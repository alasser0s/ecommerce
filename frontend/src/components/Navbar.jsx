import { useTheme } from '../context/ThemeContext';
import { Link, NavLink } from 'react-router-dom';
import { 
  HeartIcon, 
  ShoppingCartIcon, 
  SearchIcon, 
  UserIcon,
  SunIcon,
  MoonIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-primary-cream/80 dark:bg-primary-dark/80 backdrop-blur-md sticky top-0 z-50 
                    border-b border-secondary-charcoal/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">EShop</Link>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary-charcoal/10 dark:bg-accent-dark 
                     hover:bg-secondary-charcoal/20 dark:hover:bg-accent-dark-hover
                     transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-primary-cream" />
            ) : (
              <MoonIcon className="h-6 w-6 text-secondary-charcoal" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'Categories'].map((item) => (
              <NavLink 
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-accent-taupe hover:text-secondary-charcoal transition-colors duration-300"
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/80 dark:hover:bg-accent-dark">
              <SearchIcon className="h-6 w-6 text-accent-taupe dark:text-primary-cream" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/80 dark:hover:bg-accent-dark">
              <HeartIcon className="h-6 w-6 text-accent-taupe dark:text-primary-cream" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/80 dark:hover:bg-accent-dark">
              <ShoppingCartIcon className="h-6 w-6 text-accent-taupe dark:text-primary-cream" />
            </button>
            <button className="ml-4 px-4 py-2 bg-secondary-charcoal text-primary-cream rounded-lg hover:bg-secondary-charcoal-hover">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 