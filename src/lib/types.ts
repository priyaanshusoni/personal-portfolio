import { Rule } from "antd/es/form";
import { LucideIcon } from "lucide-react";

export type CONTACT_FORM_TYPE = {
  name: string;
  label: string;
  placeholder: string;
  rules?: Rule[];
  nodeType?: "input" | "textarea" | "select" | "checkbox" | "radio";
};

export interface PROJECT_PROPS {
  title: string;
  description: string;
  image: string;
  link?: string;
  repoLink?: string;
  technologies: {
    icon?: string;
    label: string;
  }[];
}

export interface EXPERIENCE_PROPS {
  company: string;
  position: string;
  duration: string;
  description: string;
  points: string[];
  tech: string[];
  logo: string;
  location: string;
}

type SKILL_ITEM = {
  name: string;
  icon?: string;
};

export interface SKILL_PROPS {
  title: string;
  icon: LucideIcon | string; // for backend svg url
  skills: SKILL_ITEM[];
}
