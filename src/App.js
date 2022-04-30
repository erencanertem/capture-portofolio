import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Nav />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
