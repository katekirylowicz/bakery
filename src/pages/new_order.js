import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { withLayout } from "../common/layout";
import getCartSum from "../utils/getCartSum";
import useProducts from '../hook/useProducts';


const NewOrder = (props) => {
  const { cart, subtractFromCart, addToCart, clearCart } = props;
  const products = useProducts();
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data, cart);
    navigate('/success');
    clearCart();
  };

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


  if (!(cart && cart.length)) {
    return <div className="empty">Twój koszyk jest pusty</div>;
  }


  const nowTimestamp = Date.now();
  const tomorrowDate = new Date(nowTimestamp + (1000 * 3600 * 24));
  const nextWeekDate = new Date(nowTimestamp + (1000 * 3600 * 24 * 7));

  return (
    <>
      <section>
        <h2>
          Złóz zamówienie na pieczywo i odbierz osobiście.
        </h2>
        <div className="OrderFormWrapper">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={`form_input${errors.user_phone ? ` has-error` : ''}`}>
              <label className="in_data"
                htmlFor="user_phone"
              > Podaj numer telefonu:
            </label>
              <input
                type="tel"
                id="user_phone"
                placeholder="+48666666666"
                {...register(
                  "user_phone",
                  {
                    required: 'This is required',
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
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
                    value: nowTimestamp,
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
                    <span>{index + 1}. {product.name}</span>
                    <label
                      className="in_data">
                    </label>
                    <button
                      className="counter"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (product.qty < 20) {
                          addToCart(product.id)
                        } else if (product.qty === 20) {
                          return (
                            alert("Zamówiona ilość  produktu z danego rodzaju jest zbyt duża. Indywidualne zamowienie moe składać się z maxymalnie 20szt. Danego produktu. Skontaktuj się z nami telefonicznie w celu ustalenia szczegłów indywidualnego zamówienia.")
                          );
                        };
                      }}>+</button>
                    <button
                      type="button"
                      className="counter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (product.qty >= 1) {
                          subtractFromCart(product.id)
                        }
                      }}>-</button> szt.

                    <input
                      className="in_qnty"
                      readOnly
                      value={product.qty}
                    />
                    <label className="in_qnty"></label>


                    <label className="product_price">{product.price} zł/szt.</label>
                    <label className="productAllPrice">Razem:</label>
                    <input className="productAllPrice"
                      readOnly
                      value={`${(product.qty * product.price).toFixed(2)} zł`}
                    />

                  </li>
                )
              })}
            </ul>
            <div className="summary">
              Suma: {getCartSum(cart, products).toFixed(2)} zł
            </div>
            <div className={`form_input${errors.inCheck ? ` has-error` : ''}`}>
              <label
                className="accept_text"
                htmlFor="accept">
              </label>
              <input

                type="checkbox"
                id="accept"
                value="1"
                {...register("inCheck", {
                  required: 'This is required',
                })}
              />
              <label
                className="accept_text"
              >
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


export default withLayout(NewOrder);