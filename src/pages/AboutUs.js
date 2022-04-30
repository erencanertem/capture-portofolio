import React from "react";
import AboutSections from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSections />;
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
