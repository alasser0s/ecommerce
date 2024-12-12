const Button = ({ children, variant = 'primary', size = 'md', icon, className = '', ...props }) => {
  const variants = {
    primary: `bg-secondary-charcoal dark:bg-primary-cream 
              hover:bg-secondary-charcoal-hover dark:hover:bg-primary-cream-hover 
              text-primary-cream dark:text-secondary-charcoal shadow-sm`,
    secondary: `bg-accent-taupe dark:bg-accent-dark 
                hover:bg-accent-taupe-hover dark:hover:bg-accent-dark-hover 
                text-white shadow-sm`,
    outline: `border-2 border-secondary-charcoal dark:border-primary-cream 
              text-secondary-charcoal dark:text-primary-cream 
              hover:bg-secondary-charcoal dark:hover:bg-primary-cream 
              hover:text-primary-cream dark:hover:text-secondary-charcoal`,
    ghost: `text-secondary-charcoal dark:text-primary-cream 
            hover:bg-secondary-charcoal/10 dark:hover:bg-primary-cream/10`,
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button 
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        transition-all duration-300
        hover:-translate-y-0.5
        focus:ring-2 focus:ring-offset-2 focus:ring-secondary-charcoal/50
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        font-medium
        flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  )
} 