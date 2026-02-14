import React from "react";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import Container from "@/components/Container";
import Projects from "@/components/Projects";
const Home = () => {
  return (
    <div>
      <Container>
        <HeroSection />
        <Projects />
        <GetInTouch />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
