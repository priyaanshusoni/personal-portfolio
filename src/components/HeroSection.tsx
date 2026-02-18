"use client";

import { motion, Variants, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import XIcon from "../../public/assets/socials/x.webp";
import LinkedInIcon from "../../public/assets/socials/linkedin.webp";
import GitHubIcon from "../../public/assets/socials/github.webp";
import YouTubeIcon from "../../public/assets/socials/youtube.webp";
import Image from "next/image";
// import AudioPlayer from "@/components/ui/AudioPlayer";
const FloatingParticles = dynamic(
  () => import("@/components/ui/FloatingParticles"),
  {
    ssr: false,
  },
);

const DecorativeSpinner = dynamic(
  () => import("@/components/ui/DecorativeSpinner"), {
    ssr : false
  }
  
);
export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/priyaanshusoni",
      label: "GitHub",
      src: GitHubIcon,
    },
    {
      href: "https://www.linkedin.com/in/priyanshu-soni-s27092003/",
      label: "LinkedIn",
      src: LinkedInIcon,
    },
    {
      href: "https://x.com/priyanshusept27",
      label: "Twitter",
      src: XIcon,
    },

    {
      src: YouTubeIcon,
      href: "https://www.youtube.com/@priyanshusoni9/videos",
      label: "YouTube",
    },
  ];

  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "System Design Architect",
    "Educator",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative  pt-20  w-full overflow-hidden  "
      id="about"
    >
      {/* Floating particles */}
      <FloatingParticles />

      <div className="w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-cyan-400 tracking-wider text-xl">
              Namaste , I&apos;m
            </span>
          </motion.div>

          {/* Name with Spinner and Line Animation */}
          <motion.div
            variants={itemVariants}
            className="mb-12 relative inline-block"
          >
            {/* Decorative Spinner Behind Name */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <DecorativeSpinner />
            </div>

            {/* Large Name */}
            <div className="relative z-10">
              <h1 className="text-7xl md:text-8xl lg:text-9xl mb-4 tracking-tight">
                <span className="gradient-text">Priyanshu Soni</span>
              </h1>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 relative h-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                className="text-gray-300 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                exit={{ opacity: 0, y: -20 }}
              >
                {titles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 w-full lg:w-[60%] mx-auto mb-12 leading-relaxed"
          >
            I craft beautiful, performant, and scalable web applications with
            modern technologies. Specialized in frontend development with React,
            Next.js, and backend systems. Passionate about creating exceptional
            user experiences and clean, maintainable code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center  gap-6 md:gap-8 lg:gap-12 mb-12"
          >
            {socialLinks.map(({ href, label, src }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              >
                {/* <Icon className="w-5 h-5" /> */}
                <div className="relative size-10 shrink-0 rounded-xl overflow-hidden  border-2 border-[#3c4042] ">
                  <Image
                    src={src}
                    alt={label}
                    width={48}
                    height={48}
                    className="select-none "
                    style={{ color: "transparent" }}
                    unoptimized
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 glass rounded-full text-white relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get In Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          window.scroll({
            top: 100,
            behavior: "smooth",
          });
        }}
      >
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </motion.div>

      {/* <AudioPlayer /> */}
    </section>
  );
}
