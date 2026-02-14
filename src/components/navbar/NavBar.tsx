"use client";

import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HamburgerMenuIcon } from "../../../public/svgs/navbar";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@/lib/constants";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const underLineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-[2.5rem] z-50 transition-all duration-300 w-full flex"
    >
      <motion.nav
        className={`    glass hidden md:flex  mx-auto  rounded-full px-[1rem] lg:px-[2rem] py-[1rem]  w-fit  `}
        whileHover={{
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
        }}
      >
        <motion.div className="flex justify-between items-center gap-4 md:gap-8  ">
          {NAV_ITEMS.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.name}
              className="text-gray-300 hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              variants={underLineVariants}
              whileHover="hover"
            >
              <Link href={item.href}>
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  transition={{ duration: 0.3 }}
                  variants={underLineVariants}
                />
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="px-6" // This Might Cause Problems on Responsive
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
            <span className="gradient-text tracking-wider">ૐ</span>
          </motion.div>

          {NAV_ITEMS.slice(2).map((item, index) => (
            <motion.div
              key={item.name}
              className="text-gray-300 hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              variants={underLineVariants}
              whileHover="hover"
            >
              <Link href={item.href}>
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  transition={{ duration: 0.3 }}
                  variants={underLineVariants}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Menu */}

      <motion.div className="flex w-full px-[1rem] justify-end  items-center  md:hidden">
        <motion.span
          className=" p-[0.625rem] glass rounded-full  "
          onClick={() => setOpen(true)}
        >
          <HamburgerMenuIcon />
        </motion.span>
      </motion.div>

      <AnimatePresence mode="wait">
        {open && <MobileDrawer open={open} onClose={onClose} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
