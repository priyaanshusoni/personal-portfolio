"use client";

import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { LeetCodeIcon } from "../../public/svgs/hero";
import DecorativeSpinner from "./ui/DecorativeSpinner";
import Container from "./Container";
export default function HeroSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
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
      Icon: Github,
      href: "https://github.com/priyaanshusoni",
      label: "GitHub",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/priyanshu-soni-s27092003/",
      label: "LinkedIn",
    },
    { Icon: Twitter, href: "https://x.com/priyanshusept27", label: "Twitter" },
    { Icon: Mail, href: "mailto:priyanshusoni.dev@gmail.com", label: "Email" },
    // {
    //   Icon: LeetCodeIcon,
    //   href: "https://leetcode.com/u/priyanshusoniii/",
    //   label: "Leetcode",
    // },
  ];

  return (
    <Container>
      <section className="min-h-screen flex items-center justify-center relative  pt-20  ">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
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
        ))}

        <div className="w-full mx-auto px-4 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-cyan-400 tracking-wider text-xl">
                Namaste , I'm
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

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-gray-300 tracking-wide">
                Software Engineer • Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 w-full lg:w-[60%] mx-auto mb-12 leading-relaxed"
            >
              I craft beautiful, performant, and scalable web applications with
              modern technologies. Specialized in frontend development with
              React, Next.js, and backend systems. Passionate about creating
              exceptional user experiences and clean, maintainable code.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-6 mb-12"
            >
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="glass p-3 rounded-full text-gray-400 hover:text-white transition-colors relative"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
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
                  <Icon className="w-5 h-5" />
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
          onClick={() => {}}
        >
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </section>
    </Container>
  );
}
