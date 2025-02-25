import React from "react";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import AboutInnovator from "./sections/AboutInnovator";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <AboutInnovator />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
