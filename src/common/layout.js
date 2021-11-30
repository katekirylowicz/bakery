import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import getAssetPath from '../utils/getAssetPath';
import Hero from "./hero";
import Footer from "./footer";

export const Layout = ({ cart, children }) => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <div className="container">
        <div className="cart_wrapper">
          <Link to='/order'><img className="cart_ico" src={getAssetPath('shopping-basket-solid.svg')} />
            <span className="cart_info">{cart ? cart.length : 0} szt.</span> </Link>
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
      <main>
        <Hero />
        {children}
      </main>
      <Footer />
    </>
  );
};

// HOC
export const withLayout = (WrappedComponent) => {
  return class WithLayout extends React.Component {
    render() {
      return (
        <Layout cart={this.props.cart}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
}

export default Layout;



