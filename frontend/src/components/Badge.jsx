const Badge = ({ children, variant = 'default', size = 'md' }) => {
  const variants = {
    default: 'bg-secondary-charcoal/10 text-secondary-charcoal',
    primary: 'bg-secondary-charcoal text-primary-cream',
    success: 'bg-green-500/10 text-green-700',
    warning: 'bg-yellow-500/10 text-yellow-700',
    danger: 'bg-red-500/10 text-red-700',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  }

  return (
    <span className={`
      ${variants[variant]}
      ${sizes[size]}
      rounded-full
      font-medium
      inline-flex items-center
    `}>
      {children}
    </span>
  )
} 