
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomRoast } from "@/lib/roasts";

interface RoastMessageProps {
  isVisible: boolean;
  onAnimationComplete: () => void;
}

const RoastMessage: React.FC<RoastMessageProps> = ({ isVisible, onAnimationComplete }) => {
  const [roast, setRoast] = useState("");

  useEffect(() => {
    if (isVisible) {
      setRoast(getRandomRoast());
    }
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl px-8 py-6 max-w-md mx-4 shadow-xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <h2 className="text-sm font-medium text-blue-500 mb-2">ORDER FEEDBACK</h2>
            <p className="text-2xl font-medium text-gray-900 mb-6">{roast}</p>
            <button
              onClick={() => onAnimationComplete()}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl py-3 transition-colors"
            >
              I'll Try Cooking
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoastMessage;
