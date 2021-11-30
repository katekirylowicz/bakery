import React from "react";

import { withLayout } from "../common/layout";
import Copy from "../common/copy_section";
import ProductsSection from "../common/products_section";

const Home = (props) => {
  return (
    <>
      <Copy />
      <ProductsSection addToCart={props.addToCart} />
    </>
  );
};

export default withLayout(Home);