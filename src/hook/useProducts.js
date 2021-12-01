import { useState, useEffect } from "react";
import axios from 'axios';


const WP_URL = 'https://katarzyna.kirylowicz.com/local-baker';
const ENDPOINT_PRODUCTS = '/wp-json/wc/v3/products';

// TODO: readonly credentials - remove from repo & keep in env vars
const CONSUMER_KEY = 'ck_7ed733aa32fbfdf8cc8f58eca55df25aae7075ea';
const CONSUMER_SECRET = 'cs_8373bf87768f96db3130a5e973e6e7b0fbc3df11';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${WP_URL}${ENDPOINT_PRODUCTS}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`)
      .then(response => setProducts(response.data))
  }, [])

  return products;
}

export default useProducts;