import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
