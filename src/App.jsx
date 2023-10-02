import { Nav } from "./components/Nav";

import { HelmetProvider } from "react-helmet-async";
import { Head } from "./utils/Head";
import { useEffect } from "react";
import { Rudderstack } from "./utils/Rudderstack";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Head />
      <header>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
      <footer id="contact"> 
        <Footer />
      </footer >
    </HelmetProvider>
  );
}

export default App;
