import { Mail, MapPin, Code2, Wrench, Database, Cloud } from "lucide-react";
import {
  CONTACT_FORM_TYPE,
  PROJECT_PROPS,
  EXPERIENCE_PROPS,
  SKILL_PROPS,
} from "./types";
import {
  AWSIcon,
  GCPIcon,
  NodeJsIcon,
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  NginxIcon,
  CSSIcon,
  MongoDBIcon,
  PostgresIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  DockerIcon,
  WebPackIcon,
  NextJSIcon,
  GraphQLIcon,
  PostmanIcon,
  CICDIcon,
} from "../../public/svgs/skills";

export const NAV_ITEMS = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/#contact" },
];

export const CONTACT_INFO = {
  email: {
    icon: Mail,
    label: "Email",
    value: "priyanshusoni.dev@gmail.com",
    method: "mailto:priyanshusoni.dev@gmail.com",
  },
  // phone: {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+91 9509542525",
  //   method: "tel:+919509542525",
  // },
  address: {
    icon: MapPin,
    label: "Address",
    value: "Jaipur, Rajasthan, India",
    method: "https://maps.app.goo.gl/1234567890",
  },
};

export const FORM_ITEMS: CONTACT_FORM_TYPE[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your Name",
    nodeType: "input",
    rules: [
      {
        required: true,
        message: "Please enter your name",
      },
    ],
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Your Email Address",
    rules: [
      {
        required: true,
        type: "email",
        message: "Please enter a valid email address",
      },
    ],
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "Subject",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your Message",
    nodeType: "textarea",
    rules: [
      {
        required: true,
        message: "Please enter your message",
      },
    ],
  },
];

export const PROJECTS: PROJECT_PROPS[] = [
  {
    title: "CBXperts",
    description:
      "Built a modern, customer-facing website using Next.js and Tailwind CSS, focusing on clean UI, responsiveness,Implemented Razorpay payment integration to enable secure purchases and service onboarding through asmooth checkout flow.",
    image: "/assets/projects/CBXperts.webp",
    link: "https://createbytes.com/cbxperts",
    technologies: [
      {
        icon: "nextjs",
        label: "Next.js",
      },

      {
        icon: "tailwindcss",
        label: "Tailwind CSS",
      },

      {
        label: "Razorpay SDK",
      },
      {
        icon: "gcloud",
        label: "GCP",
      },
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        label: "Strapi v5",
      },
    ],
  },

  {
    title: "YugYog AI",
    description:
      "Led the front-end development of a cutting-edge AI-powered CCTV Camera Survellience",
    image: "/assets/projects/YugYog-AI.webp",
    link: "https://yugyog.ai/",
    technologies: [
      {
        icon: "nextjs",
        label: "Next.js",
      },
      {
        label: "SCSS",
      },
      {
        icon: "antd",
        label: "Ant Design",
      },
      {
        label: "MediaPipe",
      },
    ],
  },

  {
    title: "CodeCupid",
    description:
      "Developed a backend application using  Node.js with Express for the backend.",
    technologies: [
      {
        icon: "nodejs",
        label: "Node.js",
      },
      {
        icon: "expressjs",
        label: "Express",
      },
      {
        icon: "mongodb",
        label: "MongoDB",
      },
    ],
    image: "/assets/projects/CodeCupid.webp",
    repoLink: "https://github.com/priyaanshusoni/CodeCupid",
  },
];

export const EXPERIENCE: EXPERIENCE_PROPS[] = [
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
      "Developed and maintained a scalable and efficient backend system using Node.js and Express",
      "Implemented Payment Gateway Integration for secure and seamless transactions",
    ],
    tech: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "Framer Motion",
      "AWS",
    ],
    logo: "/assets/experience/cb-logo.svg",
  },
];

export const SKILLS: SKILL_PROPS[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJSIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindCSSIcon },
      { name: "CSS3", icon: CSSIcon },
    ],
  },

  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "GraphQL", icon: GraphQLIcon },
      { name: "REST APIs", icon: PostmanIcon },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Webpack", icon: WebPackIcon },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: AWSIcon },
      { name: "GCP", icon: GCPIcon },
      { name: "CI/CD", icon: CICDIcon },
      { name: "Nginx", icon: NginxIcon },
    ],
  },
];
