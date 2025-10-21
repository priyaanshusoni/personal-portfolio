"use client";

import React from "react";
import { motion } from "motion/react";

const FloatingParticles = () => {
  return [...Array(40)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-cyan-400/30 rounded-full "
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut",
      }}
    />
  ));
};

export default FloatingParticles;
