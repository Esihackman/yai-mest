import React from "react";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import AboutInnovator from "./sections/AboutInnovator";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <AboutInnovator />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
