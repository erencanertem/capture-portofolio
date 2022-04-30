import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import OurWork from "../pages/OurWork";
import MovieDetail from "../pages/MovieDetail";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutUs />} exact />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
