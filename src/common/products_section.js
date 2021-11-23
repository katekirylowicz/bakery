import React, { useState, useEffect } from "react";
import wc from 'woocommerce-api';



const ProductsSection = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    var client = new wc({
      url: 'http://katarzyna.kirylowicz.com/local-baker',
      consumerKey: 'ck_91ebc637962701373c3fa69c823f6e7f270d2d10',
      consumerSecret: 'cs_ef894c524d982f1046ac6a323c9e23fbbd363dce',
      wpAPI: true,
      version: 'wc/v1'
    });
    client.getAsync('products').then(function (result) {
      setProducts(JSON.parse(result.toJSON().body))
    });
  }, [])

  return (
    <>
      <h3>Order fresh bread with personal pickup. </h3>
      <ul className="products_list">
        {products.map((product) => {
          console.log(product);
          return (
            <li key={product.id} className="product_item">
              <figure>
                <img className="product_photo" src={product.images[0].src} alt={product.name} />
                <figcaption className="product_label">{product.name}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </>
  );
};
export default ProductsSection;