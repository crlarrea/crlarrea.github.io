import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Publications } from "./components/Publications";
import { Work } from "./components/Work";
function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Hero/>
        <About/>
        <Work/>
        <Publications/>
        
      </main>
      <footer></footer>
    </>
  );
}

export default App;
