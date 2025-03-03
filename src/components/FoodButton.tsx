
import React from "react";
import { motion } from "framer-motion";

interface FoodButtonProps {
  onClick: () => void;
}

const FoodButton: React.FC<FoodButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative button-shadow bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full px-8 py-4 text-lg transition-colors"
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.span
        className="relative z-10 flex items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        Order Your Food
        <svg 
          className="ml-2 h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </motion.span>
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-400 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

export default FoodButton;
