"use client";
import { motion } from "motion/react";
import { Highlight } from "./hero-highlight";
import { IconCloudDemo } from "./SkillCloud";
import { useState, useEffect } from "react";

// Separate component for time display
const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(timeString + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.8 }}
      className="text-base md:text-lg text-gray-500 font-mono tracking-wide"
    >
      Time Zone: {currentTime}
    </motion.div>
  );
};

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left side - Scrollable Icons */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen overflow-y-auto">
        <div className="sticky top-0">
          <IconCloudDemo />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center ml-auto mr-8 md:mr-16 lg:mr-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">RAKSHIT</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-medium"
          >
            A full Stack developer
          </motion.div>
          
          {/* Description with highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 leading-relaxed"
          >
            building <Highlight className="text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-lg">seamless</Highlight> interfaces
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed"
          >
            and <Highlight className="text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-lg">robust</Highlight> backends
          </motion.div>
          
          {/* Time zone */}
          <TimeDisplay />
        </motion.div>
      </div>
    </div>
  );
}