import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router";



import "./scss/main.scss";

import Footer from "./common/footer";
import NewOrder from "./pages/new_order";
import SuccessOrder from "./pages/success_order";
import Home from "./pages/home";
import useCart from "./hook/useCart";

const PageNotFound = () => {
  return (
    <>
      <div className="pageN_container">
        <img className="logo logoP"
          src="/assets/icons8-food-as-resources-50.svg"
          alt="logo" />
        <h2 className="pegeN_header">You can't place an new order now. Page not found.</h2>
      </div>

    </>
  );
};

function App() {
  const cartProps = useCart();
  const [isOpen, setOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

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
        <Route path="/success" element={<SuccessOrder />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;