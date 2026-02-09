"use client";

import {CONTACT_INFO} from "@/lib/constants";
import { motion } from "motion/react";



export const GetInTouch = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-4">
      <h2 className="gradient-text">Get In Touch</h2>

      <p className="text-gray-400">
        Have a project in mind or just want to chat? Feel free to reach out!
      </p>

      <div className="mt-5 flex justify-between flex-wrap">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-white text-2xl font-bold">
            Let&apos;s talk about everything!
          </h3>
          <p className="text-gray-400">
            Don&apos;t like forms? Send me an email directly, or connect with me
            on social media. I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col gap-4">
            {Object.entries(CONTACT_INFO).map(([key, value], index) => (
              <a
                key={key}
                className="p-5 glass rounded-2xl  group relative overflow-hidden cursor-pointer"
                href={value?.method}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={value?.label}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    className="glass p-3 rounded-xl text-cyan-400 relative z-10"
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                  >
                    <value.icon className="w-6 h-6" />
                  </motion.span>

                  <p className="text-white group-hover:scale-105 transition-transform duration-500">
                    {value?.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Google Maps Container */}
          <div></div>
        </div>

        {/* Form Container */}

        <div></div>
      </div>
    </div>
  );
};