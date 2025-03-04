
import React, { useState } from "react";
import { motion } from "framer-motion";
import FoodButton from "@/components/FoodButton";
import RoastMessage from "@/components/RoastMessage";

const Index: React.FC = () => {
  const [showRoast, setShowRoast] = useState(false);

  const handleOrderClick = () => {
    setShowRoast(true);
  };

  const handleCloseRoast = () => {
    setShowRoast(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 p-4 relative">
      {/* Logo in top left corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-4 left-4 md:top-6 md:left-6"
      >
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-[#403E43]">
            <span className="text-[#9b87f5]">Lazy</span>
            <span className="text-[#F97316]">Bites</span>
          </span>
        </div>
      </motion.div>
      
      <RoastMessage isVisible={showRoast} onAnimationComplete={handleCloseRoast} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto flex-1 flex flex-col justify-center items-center px-4 md:px-0"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
          Hungry?
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 mx-auto max-w-md">
          The simplest way to satisfy your cravings with just one click.
        </p>
        <FoodButton onClick={handleOrderClick} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-4 text-center text-gray-400 text-xs md:text-sm w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        LazyBites - Designed with simplicity in mind
      </motion.div>
    </div>
  );
};

export default Index;
