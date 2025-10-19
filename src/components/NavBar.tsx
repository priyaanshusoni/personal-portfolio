"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { animate } from "motion";

const NavBar = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  const underLineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={` glass sticky top-[2.5rem] left-0 right-0 z-50 transition-all duration-300 w-fit my-0 mx-auto  rounded-[999px] px-[2rem] py-[1rem]  `}
      whileHover={{
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
      }}
    >
      <motion.div className="flex justify-between items-center gap-4 md:gap-8  ">
        {navItems.slice(0, 2).map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            variants={underLineVariants}
            whileHover="hover"
          >
            {item.name}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              transition={{ duration: 0.3 }}
              variants={underLineVariants}
            />
          </motion.a>
        ))}

        <motion.div
          className="px-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
          }}
          style={{ cursor: "pointer" }}
          draggable
        >
          <span className="gradient-text tracking-wider">PS</span>
        </motion.div>

        {navItems.slice(2).map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-white transition-colors relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 2) * 0.1 }}
            variants={underLineVariants}
            whileHover="hover"
          >
            {item.name}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              variants={underLineVariants}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
