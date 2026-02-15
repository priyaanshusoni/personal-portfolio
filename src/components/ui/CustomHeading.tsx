import React from "react";

const CustomHeading = ({
  text,
  level = "h1",
}: {
  text: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const getStyles = {
    h1: `!text-4xl gradient-text`,
    h2: `!text-3xl gradient-text`,
    h3: `!text-2xl gradient-text`,
    h4: `!text-xl gradient-text`,
    h5: `!text-lg gradient-text`,
    h6: `!text-base gradient-text`,
  };
  return <h1 className={getStyles[level]}>{text}</h1>;
};

export default CustomHeading;
