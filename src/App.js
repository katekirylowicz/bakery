import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/home";

import "./scss/main.scss";
import Footer from "./common/footer";
import Hero from "./common/hero";

function App() {
  return (
    <BrowserRouter>

      <Hero />
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;