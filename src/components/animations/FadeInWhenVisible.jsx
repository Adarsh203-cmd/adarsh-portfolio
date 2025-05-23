import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const FadeInWhenVisible = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  mobileOptimized = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Faster animations for mobile
  const actualDuration = mobileOptimized && window.innerWidth < 768 ? 0.3 : duration;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: actualDuration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};