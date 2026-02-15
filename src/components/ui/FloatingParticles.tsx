"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return particles.map((particle, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
      style={{
        left: particle.left,
        top: particle.top,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: "easeInOut",
      }}
    />
  ));
};

export default FloatingParticles;
