import React from "react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  points: string[];
  tech: string[];
  logo: string; // Company logo URL
  location: string;
}

const experience: ExperienceItem[] = [
  {
    company: "CreateBytes Pvt. Ltd.",
    position: "Software Development Engineer - 1 ",
    duration: "2025 - Present",
    location: "Gurugram , India",
    description: "Leading development of cutting-edge web applications",
    points: [
      "Architected and developed scalable microservices using Node.js and React",
      "Improved application performance by 60% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
    ],
    tech: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "Framer Motion",
      "GSAP",
    ],
    logo: "/assets/experience/cb-logo.svg",
  },
];

const Experience = () => {
  return (
    <section className="mx-auto py-8  lg:py-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-center flex-col gap-4">
          <h2 className="gradient-text">My Journey</h2>

          <p className="text-gray-400">
            Follow my professional story through the companies that shaped my
            career
          </p>
        </div>

        {/* Company Timelines */}
      </div>
    </section>
  );
};

export default Experience;
