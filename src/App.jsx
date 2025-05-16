// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ScrollSkills from "./components/ScrollSkills";
import ProjectsDropdown from "./components/ProjectsDropdown";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Hero />
              <AboutMe />
              <ScrollSkills />
              <ProjectsDropdown />
              <Footer />
            </div>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
