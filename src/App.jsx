import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About */}
      <About />

      {/* Featured Dishes */}
      <Dishes />

      {/* Achievements */}
      <Awards />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
