import "./assets/styles/App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { OpenToWork } from "./components/OpenToWork";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Publications } from "./components/Publications";
import { Training } from "./components/Training";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <OpenToWork />
        <Nav />
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Training />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
