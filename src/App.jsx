import { useState } from "react";
import { Nav } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Nav/>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
