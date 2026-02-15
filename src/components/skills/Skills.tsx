import React from "react";
import Container from "../Container";
import CustomHeading from "../ui/CustomHeading";
const Skills = () => {
  return (
    <Container>
      <div className="mx-auto py-8  lg:py-20">
        <div className="flex flex-col gap-4 items-center ">
          <CustomHeading text="Skills" level="h1" />
          <p className="text-lg text-gray-400">
            A comprehensive toolkit of technologies and tools I use to bring
            ideas to life
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
