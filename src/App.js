import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

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
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/why-ue' element={<WhyUE />} />
        <Route path='/who_we_are' element={<WhoWeAre />} />
        <Route path='/crusade' element={<OurCrusade />} />
        <Route path='/leadership' element={<OurLeadership />} />
        <Route path='/services' element={<Services />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;