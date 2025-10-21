"use client";

import { motion } from "motion/react";

export default function DecorativeSpinner() {
  return (
    <motion.svg
      suppressHydrationWarning
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Outer decorative circle */}
      <circle
        cx="200"
        cy="200"
        r="180"
        stroke="url(#gold-gradient)"
        strokeWidth="3"
        fill="none"
      />

      {/* Inner circle */}
      <circle
        cx="200"
        cy="200"
        r="140"
        stroke="url(#gold-gradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Stars in circle */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 200 + 140 * Math.cos(angle);
        const y = 200 + 140 * Math.sin(angle);
        return (
          <motion.path
            suppressHydrationWarning
            key={i}
            d={`M ${x} ${y - 8} L ${x + 2.5} ${y - 2} L ${x + 8} ${y} L ${
              x + 2.5
            } ${y + 2} L ${x} ${y + 8} L ${x - 2.5} ${y + 2} L ${
              x - 8
            } ${y} L ${x - 2.5} ${y - 2} Z`}
            fill="url(#gold-gradient)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        );
      })}

      {/* Decorative ornaments on outer circle */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 200 + 180 * Math.cos(angle);
        const y = 200 + 180 * Math.sin(angle);
        return (
          <g key={`ornament-${i}`}>
            <motion.path
              d={`M ${x} ${y} Q ${x + 15 * Math.cos(angle + Math.PI / 4)} ${
                y + 15 * Math.sin(angle + Math.PI / 4)
              } ${x + 20 * Math.cos(angle)} ${y + 20 * Math.sin(angle)}`}
              stroke="url(#gold-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            />
            <motion.path
              d={`M ${x} ${y} Q ${x + 15 * Math.cos(angle - Math.PI / 4)} ${
                y + 15 * Math.sin(angle - Math.PI / 4)
              } ${x + 20 * Math.cos(angle)} ${y + 20 * Math.sin(angle)}`}
              stroke="url(#gold-gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            />
          </g>
        );
      })}

      {/* Geometric shapes */}
      {[0, 90, 180, 270].map((rotation, i) => (
        <motion.g
          key={`geo-${i}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <path
            d={`M 200 ${200 - 160} L ${200 - 15} ${200 - 145} L ${200 + 15} ${
              200 - 145
            } Z`}
            fill="url(#gold-gradient)"
            transform={`rotate(${rotation} 200 200)`}
          />
        </motion.g>
      ))}

      {/* Decorative swirls on outer ring */}
      <motion.path
        d="M 200 20 Q 210 25 215 35 Q 218 45 215 55 Q 210 65 200 70"
        stroke="url(#gold-gradient)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <radialGradient id="glow-gradient">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}
