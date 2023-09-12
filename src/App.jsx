import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Publications } from "./components/Publications";

function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Hero/>
        <About/>
        <Publications/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
