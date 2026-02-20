"use client";

import React from "react";
import Container from "../Container";
import CustomHeading from "../ui/CustomHeading";
import { SKILLS } from "@/lib/constants";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <Container>
      <div className="mx-auto py-8  lg:py-20">
        <div className="flex flex-col gap-4 items-center ">
          <CustomHeading text="Skills" level="h1" />
          <p className="text-lg text-gray-400">
            A comprehensive toolkit of technologies and tools I use to bring
            ideas to life
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 mb-20">
        {SKILLS.map((skill, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="cursor-pointer glass rounded-2xl  p-8 h-full relative group"
            key={index}
          >
            {/* Gradient Bg On Hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Gradient Border On Hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6, #06b6d4, #10b981, #3b82f6)",
                backgroundSize: "300% 300%",
                padding: "2px",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="flex items-center gap-2">
              <span className="glass p-3 rounded-xl text-cyan-400">
                <skill.icon />
              </span>

              <h3 className="text-white">{skill.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              {skill?.skills?.map((skill, index) => (
                <motion.div
                  initial={{
                    y: 40,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="glass rounded-xl p-4 cursor-pointer   flex flex-col gap-4 items-center justify-center"
                  key={index}
                >
                  <span className="w-8 h-8">
                    {skill?.icon && <skill.icon />}
                  </span>
                  <span className="text-gray-300">{skill?.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
