import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <span className="text-2xl font-bold bg-gradient-to-r from-secondary-charcoal to-accent-taupe 
                      dark:from-primary-cream dark:to-accent-taupe 
                      bg-clip-text text-transparent transition-colors duration-300
                      group-hover:scale-105 transform duration-200">
        EShop
      </span>
    </Link>
  );
};

export default Logo; 