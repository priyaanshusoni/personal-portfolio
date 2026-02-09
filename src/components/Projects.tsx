"use client";

import React from "react";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import StackIcon from "tech-stack-icons";

const Projects = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-4" id="projects">
      <h2 className="gradient-text text-2xl font-bold">Featured Projects</h2>

      <p className="text-gray-400">
        A collection of projects showcasing my skills and passion for
        Engineering
      </p>

      {/* Projects Section */}

      <div
        className={` mx-auto mt-10 grid grid-cols-1 md:grid-cols-2   ${PROJECTS?.length == 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-8`}
      >
        {PROJECTS.map(
          (
            { title, description, image, link, technologies, repoLink },
            index,
          ) => {
            return (
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.2,
                  },
                }}
                className="flex flex-col gap-6 rounded-2xl  overflow-hidden  border group border-gray-700 "
                key={title}
              >
                <motion.div className="relative min-h-[200px] overflow-hidden cursor-pointer ">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 z-40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                    {repoLink && (
                      <motion.a
                        href={repoLink}
                        className="glass p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-6 h-6  " />
                      </motion.a>
                    )}
                    {link && (
                      <motion.a
                        href={link}
                        className="glass p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>

                  <Image
                    src={image}
                    alt={title}
                    fill
                    objectFit="cover"
                    className="w-full h-full"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>

                <div className="flex flex-col gap-4 px-4 py-4">
                  <h3 className="text-white text-lg">{title}</h3>

                  <p className="text-gray-400">{description}</p>

                  {technologies.length > 0 && (
                    <div className="flex gap-2 flex-wrap ">
                      {technologies?.map((tech, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-blue-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                        >
                          <span>{tech?.label}</span>

                          {/* {tech?.icon && (
                            <span>
                              <StackIcon
                                name={tech?.icon}
                                className="w-6 h-6"
                              />
                            </span>
                          )} */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Projects;
