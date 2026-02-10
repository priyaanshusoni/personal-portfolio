import { Rule } from "antd/es/form";

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
