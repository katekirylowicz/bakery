import React from "react";

import Hero from "../common/hero";
import Copy from "../common/copy_section";
import ProductsSection from "../common/products_section";

const Home = (props) => {
  return (
    <>
      <Hero />
      <Copy />
      <ProductsSection addToCart={props.addToCart} />
    </>
  );
};

export default Home;