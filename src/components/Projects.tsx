"use client";

import React from "react";
import { PROJECTS } from "@/lib/constants";
import { motion } from "motion/react";
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10" id="projects">
      <h2 className="gradient-text text-2xl font-bold">Featured Projects</h2>

      <p className="text-center text-gray-400">
        A collection of projects showcasing my skills and passion for
        Engineering
      </p>

      <div
        className={`mx-auto mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 ${
          PROJECTS.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {PROJECTS.map(
          ({ title, description, link, technologies, repoLink }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 glass p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg text-white">{title}</h3>

                <div className="flex shrink-0 gap-2">
                  {repoLink && (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                      aria-label={`${title} source code`}
                      className="rounded-full glass p-2 text-white transition-colors hover:bg-white/20"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      aria-label={`${title} live demo`}
                      className="rounded-full glass p-2 text-white transition-colors hover:bg-white/20"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="flex-1 leading-relaxed text-gray-400">
                {description}
              </p>

              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech.label}
                      className="rounded-full border border-cyan-500/20 bg-blue-500/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {tech.label}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
