import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoes from '../utils/shoes.json';
import ProductCard from '../commons/ProductCard';
import s from '../styles/Cart.module.css';
import { useCartValue } from '../context/CartContext';

//// ALEATORIO LOGUEADO/DESLOGUEADO PARA PROBAR RUTA CHECKOUT
const logged = Math.random() < 0.5;

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);

  const [{ cart }, dispatch] = useCartValue();

  return (
    <div className={s.cart}>
      <div className={s.cartItems}>
        {cart.map((shoe) => (
          <ProductCard shoe={shoe} key={shoe.id} />
        ))}
      </div>
      <div className={s.subtotal}>
        <div className={s.cuenta}>
          <h4>SUBTOTAL</h4>
          <ul>
            {cart.map((shoe) => (
              <li key={shoe.id}>
                {shoe.quantity} x {shoe.model}:<br />
                USD {Math.round(shoe.quantity * shoe.price)}
              </li>
            ))}
          </ul>
          <h5>USD {subtotal}</h5>
        </div>
        <Link to={logged ? '/checkout' : '/login'}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
