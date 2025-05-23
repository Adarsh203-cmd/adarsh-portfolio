export const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <div className={`
      backdrop-blur-md bg-white/10 
      border border-white/20 
      rounded-xl shadow-xl
      ${hover ? 'hover:bg-white/20 hover:border-white/30 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};