import React from 'react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Logo Animation */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-3 h-3 bg-neon rounded-full shadow-[0_0_20px_#CCFF00]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-2xl font-bold text-black tracking-tight">
            Curing Innos
          </span>
        </div>

        {/* Spinner */}
        <motion.div
          className="w-8 h-8 border-2 border-gray-200 border-t-neon rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loading;

