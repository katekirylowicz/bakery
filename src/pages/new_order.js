import React, { useCallback, useState, useEffect } from "react";
import wc from 'woocommerce-api';
import Hero from "../common/hero";

const NewOrder = (props) => {
  const { cart, subtractFromCart, addToCart } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var client = new wc({
      url: 'http://katarzyna.kirylowicz.com/local-baker',
      consumerKey: 'ck_91ebc637962701373c3fa69c823f6e7f270d2d10',
      consumerSecret: 'cs_ef894c524d982f1046ac6a323c9e23fbbd363dce',
      wpAPI: true,
      version: 'wc/v1'
    });
    client.getAsync('products').then(function (result) { setProducts(JSON.parse(result.toJSON().body)) });
  }, [])

  const mapProduct = useCallback((cartItem) => {
    const cartItemProduct = products.find(product => product.id === cartItem.id);
    if (!cartItemProduct) {
      return null;
    }

    return {
      ...cartItemProduct,
      qty: cartItem.qty,
    }
  }, [products]);

  const [form, setForm] = useState({ phoneNumber: " ", date: " ", qnty: 0, inCheck: false });

  const handleChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.userPhone);
    console.log(e.target.date);
    console.log(e.target.qnty);

    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value

      }
    });
  };
  /*
    const handleSubmit = (e) => {
      e.preventDefault();
       if (form.phoneNumber=== '/^([0-9]{9})$/' ) && ({form.inCheck="checked"}) {
        e.target.submit();
    } else {
        
        alert("Telefon powinien mieć format xxx-xxx-xxx lub nie wyraziłeś zgdy na wykorzystanie numeru telefonu na potrzby realizacji zamówienia. ");
    }

      const order = {
        phoneNumber: form.userPhone,
        date: form.date,
        selectedProduct: {
          id: product.id,
          selectProduct: product.name,
          quantity: qnty
        }
      }
  
    }
    */

  const updateCart = () => { }

  if (!cart.length) {
    return <div>Twój koszyk jest pusty</div>;
  }

  return (
    <>
      <Hero />
      <section>
        <h2>
          Złóz zamówienie na pieczywo i odbierz osobiście rano :)
        </h2>
        <div className="OrderFormWrapper">
          <form /*onSubmit={handleSubmit}*/>
            <label className="in_data" htmlFor="user_phone"> Podaj numer telefonu:
              <input type="number" id="user_phone" name="phoneNumber" placeholder="333-333-333" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" value={form.userPhone} onChange={handleChange} />
            </label>
            <label className="in_data" min="2021-11-23" max="2021-12-31" htmlFor="number"> Podaj datę odbioru zamówienia:
              <input type="date" id="date" name="date" value={form.date} onChange={handleChange} />
            </label>
            <div className="in_data"> Wybrane pieczywo:</div>
            <ul>
              {cart.sort((a, b) => a.id - b.id).map((cartItem) => {
                const product = mapProduct(cartItem);
                if (!product) {
                  return null;
                }
                return (
                  <li key={product.id}>
                    <input type="hidden" name="selectedProduct" value={product.id} />
                    <span>{product.name}</span>
                    <label className="in_data"> szt.
                    <button className="counter" type="button" onClick={(e) => {
                        e.preventDefault();
                        if (product.qty < 20) {
                          addToCart(product.id)
                        }
                      }}>+</button>
                      <button className="counter" onClick={(e) => {
                        e.preventDefault();
                        if (product.qty >= 1) {
                          subtractFromCart(product.id)
                        }
                      }}>-</button>
                      <input className="in_qnty" name="qnty" value={product.qty} />
                    </label>
                  </li>
                )
              })}
            </ul>
            <button className="addToOrder" onClick={updateCart}>Aktualizuj koszyk</button>
            <label className="accept_text" htmlFor="accept">
              <input type="checkbox" id="accept" name="inCheck" checked={useState.inCheck} />
              Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w rozumieniu ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną (Dz.U.2017.1219 t.j.) w formie wiadomości tekstowej sms na podany numer telefonu.
            </label>
            <button className="sent" type="submit">Wyślij Zamówienie</button>
          </form>




        </div>
      </section>
    </>
  );
};

export default NewOrder;