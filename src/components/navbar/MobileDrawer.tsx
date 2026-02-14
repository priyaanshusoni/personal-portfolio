"use client";

import React from "react";

import { MobileDrawerCrossIcon } from "../../../public/svgs/navbar";
import { motion } from "motion/react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
const MobileDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 overflow-hidden "
    >
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-cyan-500/10 rounded-tl-xl rounded-bl-xl overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <motion.span
          className="p-[0.625rem] glass rounded-full absolute top-4 right-4 "
          onClick={onClose}
        >
          <MobileDrawerCrossIcon />
        </motion.span>

        <div className="flex flex-col gap-4 px-10  h-full justify-center items-center m">
          {NAV_ITEMS.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              onClick={onClose}
              className="glass rounded-2xl px-6 py-4 text-gray-300 hover:text-white transition-colors relative group overflow-hidden"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileDrawer;
