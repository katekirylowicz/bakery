import React from "react";
import { Routes, Route } from "react-router-dom";



import "./scss/main.scss";

import NewOrder from "./pages/new_order";
import SuccessOrder from "./pages/success_order";
import Home from "./pages/home";
import PageNotFound from "./pages/not_found";
import useCart from "./hook/useCart";

function App() {
  // TODO: refactor - provide cart in HOC or context provider
  const cartProps = useCart();

  return (
    <Routes>
      <Route path="/" element={<Home {...cartProps} />} />
      <Route path="/order" element={<NewOrder {...cartProps} />} />
      <Route path="/success" element={<SuccessOrder {...cartProps} />} />
      <Route path="*" element={<PageNotFound {...cartProps} />} />
    </Routes>
  );
}

export default App;