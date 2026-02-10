import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_FORM_TYPE, PROJECT_PROPS } from "./types";

export const CONTACT_INFO = {
  email: {
    icon: Mail,
    label: "Email",
    value: "priyanshusoni.dev@gmail.com",
    method: "mailto:priyanshusoni.dev@gmail.com",
  },
  phone: {
    icon: Phone,
    label: "Phone",
    value: "+91 9509542525",
    method: "tel:+919509542525",
  },
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
    name: "emailAddress",
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
