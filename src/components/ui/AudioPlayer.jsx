"use client";

import { motion } from "motion/react";
const AudioPlayer = () => {
  return (
    <motion.div>
      <motion.audio autoPlay loop>
        <source src="/assets/bg-music.mp3" type="audio/mp3" />
      </motion.audio>
    </motion.div>
  );
};

export default AudioPlayer;
