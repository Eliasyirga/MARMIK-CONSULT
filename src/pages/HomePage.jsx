import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Founder from "../components/Founder";
import Education from "../components/Education";
import VisionMission from "../components/VisionMission"; // ✅ Import VisionMission
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Founder />
      <Education />
      <VisionMission /> {/* ✅ Use the correct component */}
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
