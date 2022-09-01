import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfoilo from "./components/portfoilo/Portfoilo";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfoilo />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
