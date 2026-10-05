import logo from "./assets/logo.png";
import applicationImg from "./assets/bewerbung-1.jpg";

import "./legal.css";
import Impressum from "./pages/impressum.js";
import Datenschutz from "./pages/datenschutz.js";

import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Projects from "./components/Projects/Projects.js";
import Certifications from "./components/Certifications/Certifications.js";
import Skills from "./components/Skills/Skills.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

export default function App() {
  if (window.location.pathname === "/impressum") {
    return <Impressum />;
  }

  if (window.location.pathname === "/datenschutz") {
    return <Datenschutz />;
  }

  return (
    <div className="app">
      <Header logo={logo} />

      <main>
        <Hero applicationImg={applicationImg} />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
