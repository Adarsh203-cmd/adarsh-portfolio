import { motion } from 'framer-motion';

export const GradientCard = ({ 
  children, 
  className = "", 
  variant = "primary",
  hover = true,
  onClick = null 
}) => {
  const variants = {
    primary: "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700",
    secondary: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-500",
    success: "bg-gradient-to-br from-green-500 via-teal-600 to-blue-600",
    accent: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
    neutral: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
  };

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={`
        ${variants[variant]}
        rounded-xl shadow-lg
        text-white
        transition-all duration-300
        ${hover ? 'hover:shadow-2xl hover:scale-105 active:scale-95' : ''}
        ${onClick ? 'cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300' : ''}
        ${className}
      `}
      onClick={onClick}
      whileTap={onClick ? { scale: 0.95 } : {}}
    >
      <div className="relative p-6 h-full">
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 rounded-xl" />
        
        {/* Content with relative positioning */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </Component>
  );
};