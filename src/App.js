import { BrowserRouter, Link, } from "react-router-dom";
import { Routes, Route } from "react-router";


import "./scss/main.scss";

import Footer from "./common/footer";
import NewOrder from "./pages/new_order";
import Home from "./pages/home";
import useCart from "./hook/useCart";

const PageNotFound = () => {
  return (
    <>
      <h1>404</h1>
      <span><img className="logo"
        src="/assets/icons8-food-as-resources-50.svg"
        alt="logo" />
      </span>

      <h2>You can't place an new order now. Page not found.</h2>
    </>
  );
};

function App() {
  const cartProps = useCart();

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to='/order'>Nowe Zamówienie</Link></li>
          <li>w koszyku: {cartProps.cart.length}</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={cartProps.addToCart} />} />
        <Route path="/order" element={<NewOrder {...cartProps} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;