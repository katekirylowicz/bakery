import React from "react";
import { Link } from "react-router-dom";

import useProducts from '../hook/useProducts';

const ProductsSection = (props) => {
  const { addToCart } = props;
  const products = useProducts();

  return (
    <>
      <section>
        <h3>Order fresh bread with personal pickup. </h3>

        <ul className="products_list">
          {products.map((product) => (
            <li key={product.id} className="product_item">
              <figure>
                <img className="product_photo"
                  src={product.images[0].src} alt={product.name} />
                <figcaption className="product_label">{product.name} - {product.price}zł/szt.</figcaption>
              </figure>
              <button
                className="add_product_btn"
                onClick={() => addToCart(product.id)}>Dodaj do koszyka</button>
            </li>
          ))}
        </ul>
        <Link to="/order"><button className="btn_GoToCart">Przejdź do koszyka</button></Link>
      </section>
    </>
  );
};
export default ProductsSection;