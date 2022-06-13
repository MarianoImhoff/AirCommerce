<<<<<<< HEAD
import React from "react"
=======
import React from 'react';
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoes from '../utils/shoes.json';
import ProductCard from '../commons/ProductCard';
import s from '../styles/Cart.module.css';
<<<<<<< HEAD


//// CARRITO FAKE CON ALGUNOS PRODUCTOS Y CANTIDAD
const selectedShoes = [shoes[0], shoes[3], shoes[5]];
selectedShoes[0].quantity = 1;
selectedShoes[1].quantity = 1;
selectedShoes[2].quantity = 1;
=======
import { useCartValue } from '../context/CartContext';
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075

//// ALEATORIO LOGUEADO/DESLOGUEADO PARA PROBAR RUTA CHECKOUT
const logged = Math.random() < 0.5;

const Cart = () => {
<<<<<<< HEAD
  const [cartList, setCartList] = useState(selectedShoes);
  const [subtotal, setSubtotal] = useState(0);

  const handleQuantity = (barcode, newQ) => {
    const updatedList = cartList.map((shoe) => {
      if (shoe.barcode === barcode) {
        return {
          ...shoe,
          quantity: newQ,
        };
      }
      return shoe;
    });
    setCartList(updatedList);
  };

  const handleRemoveItem = (barcode) => {
    const updatedList = cartList.filter((shoe) => shoe.barcode !== barcode);
    setCartList(updatedList);
  };

  useEffect(() => {
    const calculatedSubtotal = Math.round(
      cartList.reduce(
        (accumulated, currentItem) =>
          accumulated + currentItem.quantity * currentItem.price,
        0
      )
    );
    setSubtotal(calculatedSubtotal);
  }, [cartList]);

  return (

    <div className={s.cart}>
      <div className={s.cartItems}>
        {cartList.map((shoe) => (
          <ProductCard
            shoe={shoe}
            handleQuantity={handleQuantity}
            handleRemoveItem={handleRemoveItem}
            key={shoe.barcode}
          />
=======
  const [subtotal, setSubtotal] = useState(0);

  const [{ cart }, dispatch] = useCartValue();

  return (
    <div className={s.cart}>
      <div className={s.cartItems}>
        {cart.map((shoe) => (
          <ProductCard shoe={shoe} key={shoe.id} />
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
        ))}
      </div>
      <div className={s.subtotal}>
        <div className={s.cuenta}>
          <h4>SUBTOTAL</h4>
          <ul>
<<<<<<< HEAD
            {cartList.map((shoe) => (
              <li key={shoe.barcode}>
=======
            {cart.map((shoe) => (
              <li key={shoe.id}>
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
                {shoe.quantity} x {shoe.model}:<br />
                USD {Math.round(shoe.quantity * shoe.price)}
              </li>
            ))}
          </ul>
          <h5>USD {subtotal}</h5>
        </div>
<<<<<<< HEAD
        <Link to={logged ? '/checkout' : "/login" }>
          <button>Checkout</button>
        </Link>

=======
        <Link to={logged ? '/checkout' : '/login'}>
          <button>Checkout</button>
        </Link>
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
      </div>
    </div>
  );
};

export default Cart;
