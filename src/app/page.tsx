import React from "react";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import Container from "@/components/Container";
import Projects from "@/components/Projects";
const Home = () => {
  return (
    <div>
      <Container>
        <HeroSection />
        <Experience />
        <Projects />
        <GetInTouch />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
