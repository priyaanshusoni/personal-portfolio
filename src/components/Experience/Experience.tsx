"use client";

import React from "react";
import { EXPERIENCE } from "@/lib/constants";
import FadeUp from "../animations/FadeUp";
import { Space } from "antd";
import Image from "next/image";
import CBLogo from "../../../public/assets/experience/cb-logo.webp";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Experience = () => {
  const [isExpanded, setIsExpended] = useState(false);

  return (
    <section className="mx-auto py-8  lg:py-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-center flex-col gap-4">
          <FadeUp props={{ className: "gradient-text text-2xl font-bold" }}>
            My Journey
          </FadeUp>

          <FadeUp props={{ className: "text-gray-400 text-center" }}>
            Follow my professional journey through the companies that shaped my
            career
          </FadeUp>
        </div>
      </div>

      {/* Company Timelines */}

      <div className="mt-10">
        {EXPERIENCE?.map(
          ({ points, position, company, description, tech }, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
                key={index}
                className="border rounded-xl p-4 lg:p-8 glass cursor-pointer relative"
              >
                <span
                  className={`w-6 h-6 text-cyan-400 absolute right-4  ${isExpanded ? "rotate-90" : ""} transition-transform`}
                  onClick={() => setIsExpended(!isExpanded)}
                >
                  <ChevronRight />
                </span>
                <Space align="start" size={16} wrap>
                  <div className=" rounded-xl overflow-hidden  border-2 border-[#3c4042] relative ">
                    <Image
                      src={CBLogo}
                      alt={company}
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-col items-start gap-3 text-white">
                    <h3 className=" text-lg ">{position}</h3>
                    <p className="text-cyan-400 ">{company}</p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <p className="flex gap-1 items-center">
                        <span>
                          <Calendar className="w-4 h-4" />
                        </span>
                        2025 - Present
                      </p>

                      <p className="flex gap-1 items-center">
                        <span>
                          <MapPin className="w-4 h-4" />
                        </span>
                        Gurugram, India
                      </p>
                    </div>

                    <p className="text-gray-400">{description}</p>
                  </div>
                </Space>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`mt-4 text-white `}
                >
                  <h4>Key Achievement</h4>

                  <div key={index} className="flex flex-col gap-4 mt-5">
                    {points.map((point, index) => (
                      <p key={index}>
                        <span className="text-cyan-400  flex-shrink-0"> ▹</span>{" "}
                        {point}
                      </p>
                    ))}
                  </div>

                  <h4 className="mt-5">Technologies Used</h4>

                  <div className="flex flex-wrap gap-4 mt-5 ">
                    {tech.map((tech, index) => (
                      <motion.span
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                          y: isExpanded ? 0 : 40,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        key={`skill-${index}`}
                        className="px-3 py-1 bg-blue-500/10 text-cyan-400 rounded-full border border-cyan-500/20 text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Experience;
