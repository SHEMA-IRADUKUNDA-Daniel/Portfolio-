import About from "./sections/about";
import Blogs from "./sections/blogs";
import Experience from "./sections/experiences";
import Hero from "./sections/hero";
import Projects from "./sections/project";
import Skills from "./sections/skills";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
    </main>
  );
}

export default App;
