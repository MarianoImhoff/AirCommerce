
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoes from '../utils/shoes.json';
import ProductCard from '../commons/ProductCard';
import s from '../styles/Cart.module.css';


//// CARRITO FAKE CON ALGUNOS PRODUCTOS Y CANTIDAD
const selectedShoes = [shoes[0], shoes[3], shoes[5]];
selectedShoes[0].quantity = 1;
selectedShoes[1].quantity = 1;
selectedShoes[2].quantity = 1;

//// ALEATORIO LOGUEADO/DESLOGUEADO PARA PROBAR RUTA CHECKOUT
const logged = Math.random() < 0.5;

const Cart = () => {
  const [cartList, setCartList] = useState(selectedShoes);
  const [subtotal, setSubtotal] = useState(0);

  const handleQuantity = (id, newQ) => {
    const updatedList = cartList.map((shoe) => {
      if (shoe.id === id) {
        return {
          ...shoe,
          quantity: newQ,
        };
      }
      return shoe;
    });
    setCartList(updatedList);
  };

  const handleRemoveItem = (id) => {
    const updatedList = cartList.filter((shoe) => shoe.id !== id);
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
            key={shoe.id}
          />
        ))}
      </div>
      <div className={s.subtotal}>
        <div className={s.cuenta}>
          <h4>SUBTOTAL</h4>
          <ul>
            {cartList.map((shoe) => (
              <li key={shoe.id}>
                {shoe.quantity} x {shoe.model}:<br />
                USD {Math.round(shoe.quantity * shoe.price)}
              </li>
            ))}
          </ul>
          <h5>USD {subtotal}</h5>
        </div>
        <Link to={logged ? '/checkout' : "/login" }>
          <button>Checkout</button>
        </Link>

      </div>
    </div>
  );
};

export default Cart;
