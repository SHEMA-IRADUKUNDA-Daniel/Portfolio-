import MouseGlow from "./components/MouseGlow";
import About from "./sections/about";
import Blogs from "./sections/blogs";
import Contact from "./sections/contact";
import Experience from "./sections/experiences";
import Hero from "./sections/hero";
import Projects from "./sections/project";
import Skills from "./sections/skills";
import Testimonials from "./sections/testimonials";

function App() {
  return (
    <main>
      <MouseGlow />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <Blogs />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
