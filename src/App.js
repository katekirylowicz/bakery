import React, { useState } from "react";
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
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="cart_wrapper">
          <Link to='/order'><img className="cart_ico" src="/assets/shopping-basket-solid.svg" />
            <span className="cart_info">{cartProps.cart.length} szt.</span> </Link>
        </div>
        <button
          className={`hamburger-button ${isOpen ? "open" : "close"}`}
          onClick={() => setOpen(!isOpen)}

        >
          <span className="bar b1"></span>
          <span className="bar b2"></span>
          <span className="bar b3"></span>
        </button>
        <div className="navi_wrapper">
          <nav className={`panel ${isOpen ? "open" : "close"}`}>
            <ul className="main_navi">
              <li className="main_navi_item"><Link to="/">Home Page</Link></li>
              <li className="main_navi_item"><Link to='/order'>Nowe Zamówienie</Link></li>
            </ul>
          </nav>
        </div>
      </div>
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