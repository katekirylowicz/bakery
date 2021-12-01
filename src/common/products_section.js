import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wc from 'woocommerce-api';



const ProductsSection = (props) => {
  const { addToCart } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    var client = new wc({
      url: 'https://katarzyna.kirylowicz.com/local-baker',
      consumerKey: 'ck_7ed733aa32fbfdf8cc8f58eca55df25aae7075ea',
      consumerSecret: 'cs_8373bf87768f96db3130a5e973e6e7b0fbc3df11',
      wpAPI: true,
      version: 'wc/v1',
      axiosConfig: {
        headers: {},
      },
    });
    client.getAsync('products').then(function (result) {
      setProducts(JSON.parse(result.toJSON().body))
    });
  }, [])

  return (
    <>
      <section>
        <h3>Order fresh bread with personal pickup. </h3>

        <ul className="products_list">
          {products.map((product) => {
            console.log(product);
            return (
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
            );
          })}
        </ul>
        <Link to="/order"><button className="btn_GoToCart">Przejdź do koszyka</button></Link>
      </section>
    </>
  );
};
export default ProductsSection;