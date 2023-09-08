import React from "react";
import Agents from "./components/Agents.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import OurCrusade from "./components/OurCrusade.jsx";
import OurLeadership from "./components/OurLeadership.jsx";
import Services from "./components/Services.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import WhyUE from "./components/WhyUnitedElite.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;