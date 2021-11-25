import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import wc from 'woocommerce-api';
import Hero from "../common/hero";

const NewOrder = (props) => {
  const { cart, subtractFromCart, addToCart } = props;
  const [products, setProducts] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data, cart);
  };


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

  // const [form, setForm] = useState({ phoneNumber: " ", date: " ", qnty: 0, inCheck: false });

  // const handleChange = (e) => {
  //   console.log(e.target.type);
  //   console.log(e.target.userPhone);
  //   console.log(e.target.date);
  //   console.log(e.target.qnty);

  //   const { name, value } = e.target;
  //   setForm(prevState => {
  //     return {
  //       ...prevState,
  //       [name]: value

  //     }
  //   });
  // };



  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.userPhone === '^/+/[0-9]{11}$/' && form.inCheck === true) {
  //     e.target.submit();
  //   } else {
  //     return (
  //       <>
  //         <span className="error_alert"> Telefon powinien mieć format xxx-xxx-xxx lub nie wyraziłeś zgdy na wykorzystanie numeru telefonu na potrzby realizacji zamówienia. </span>
  //       </>
  //     );
  //   };
  // };





  if (!cart.length) {
    return <div>Twój koszyk jest pusty</div>;
  }


  const nowTimestamp = Date.now();
  const tomorrowDate = new Date(nowTimestamp + (1000 * 3600 * 24));
  const nextWeekDate = new Date(nowTimestamp + (1000 * 3600 * 24 * 7));

  console.log(errors);

  return (
    <>
      <Hero />
      <section>
        <h2>
          Złóz zamówienie na pieczywo i odbierz osobiście rano :)
        </h2>
        <div className="OrderFormWrapper">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={`form_input${errors.user_phone ? ` has-error` : ''}`}>
              <label className="in_data"
                htmlFor="user_phone"
              > Podaj numer telefonu:
            </label>
              <input
                type="number"
                id="user_phone"
                placeholder="+48666666666"
                {...register(
                  "user_phone",
                  {
                    required: 'This is required',
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                      message: 'Invalid phone number',
                    },
                  }
                )}
              />
              {errors.user_phone && <div className="form_error">{errors.user_phone.message}</div>}
            </div>
            <div className={`form_input${errors.date ? ` has-error` : ''}`}>
              <label className="in_data"
                htmlFor="date"
              >
                Podaj datę odbioru zamówienia:
              </label>
              <input
                type="date"
                id="date"
                min={tomorrowDate.toISOString().split('T').shift()}
                max={nextWeekDate.toISOString().split('T').shift()}
                {...register("date", {
                  required: 'This is required',
                  valueAsDate: true,
                  min: {
                    value: tomorrowDate,
                    message: 'Select date from tomorrow to next week',
                  },
                  max: {
                    value: nextWeekDate,
                    message: 'Select date from tomorrow to next week',
                  },
                  value: tomorrowDate.toISOString().split('T').shift(),
                })}
              />
              {errors.date && <div className="form_error">{errors.date.message}</div>}
            </div>
            <div className="in_data"> Wybrane pieczywo:</div>
            <ul>
              {cart.sort((a, b) => a.id - b.id).map((cartItem, index) => {
                const product = mapProduct(cartItem);
                if (!product) {
                  return null;
                }
                return (
                  <li
                    key={product.id}>
                    <span>{product.name}</span>
                    <label
                      className="in_data"> szt.
                    <button
                        className="counter"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (product.qty < 20) {
                            addToCart(product.id)
                          } else if (product.qty === 20) {
                            return (
                              <span className="error_alert">Zamówiona ilość produktu jest zbyt duża. Skontaktuj się z nami telefonicznie w celu ustalenia szczegłów zamówienia.</span>
                            );
                          };
                        }}>+</button>
                      <button
                        className="counter"
                        onClick={(e) => {
                          e.preventDefault();
                          if (product.qty >= 1) {
                            subtractFromCart(product.id)
                          }
                        }}>-</button>
                      <input
                        className="in_qnty"
                        readOnly
                        value={product.qty}
                      />
                    </label>
                  </li>
                )
              })}
            </ul>
            <div className={`form_input${errors.inCheck ? ` has-error` : ''}`}>
              <label
                className="accept_text"
                htmlFor="accept">
                <input
                  type="checkbox"
                  id="accept"
                  value="1"
                  {...register("inCheck", {
                    required: 'This is required',
                  })}
                />
              Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w rozumieniu ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną (Dz.U.2017.1219 t.j.) w formie wiadomości tekstowej sms na podany numer telefonu.
            </label>
              {errors.inCheck && <div className="form_error">{errors.inCheck.message}</div>}
            </div>
            <button
              className="sent"
              type="submit"
              onClick={handleSubmit}
            >Wyślij Zamówienie</button>
          </form>




        </div>
      </section>
    </>
  );
};


export default NewOrder;