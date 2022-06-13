<<<<<<< HEAD
import React from "react"
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import s from '../styles/ProductCard.module.css';

const ProductCard = ({ shoe, handleQuantity, handleRemoveItem }) => {
  console.log(shoe)
  const handleChange = (event) => {
    handleQuantity(shoe.barcode, event.target.value);
  };

  const handleClick = () => {
    handleRemoveItem(shoe.barcode);
  };
=======
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import s from '../styles/ProductCard.module.css';
import { useCartValue } from '../context/CartContext';
import { actionTypes } from '../context/CartReducer';

const ProductCard = ({ shoe, handleQuantity, handleRemoveItem }) => {
  const [{ cart }, dispatch] = useCartValue();

  const changeQuantity = (event) =>
    dispatch({
      type: actionTypes.CHANGE_QUANTITY,
      id: shoe.id,
      newQuantity: Number(event.target.value),
    });

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: shoe.id,
    });

  console.log("CANTIDAD ", shoe.quantity);
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075

  return (
    <div className={s.productCard} key={shoe.barcode}>
      <div className={s.imageContainer}>
<<<<<<< HEAD
        <Link to={`/product_view/${shoe.barcode}`}>
=======
        <Link to={`/${shoe.id}`}>
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
          <img
            className={s.image}
            src={require(`../utils/img${shoe.url_path}`)}
            alt={shoe.model}
          />
        </Link>
      </div>
      <div className={s.details}>
<<<<<<< HEAD
          <ul>
            <li>Marca: {shoe.brand}</li>
            <li>Modelo: {shoe.model}</li>
            <li>Talle: {shoe.size}</li>
            <li>Precio: USD {Math.round(shoe.price)}</li>
          </ul>
        <div>
          <label>Cantidad:&nbsp;</label>
          <select name={s.quantity} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
=======
        <ul>
          <li>Marca: {shoe.brand}</li>
          <li>Modelo: {shoe.model}</li>
          <li>Talle: {shoe.size}</li>
          <li>Precio: USD {Math.round(shoe.price)}</li>
        </ul>
        <div>
          <label>Cantidad:&nbsp;</label>      
          <select name={s.quantity} onChange={changeQuantity}>
            <option value="1" selected={shoe.quantity === 1 ? "selected" : ""}>1</option>
            <option value="2" selected={shoe.quantity === 2 ? "selected" : ""}>2</option>
            <option value="3" selected={shoe.quantity === 3 ? "selected" : ""}>3</option>
            <option value="4" selected={shoe.quantity === 4 ? "selected" : ""}>4</option>
            <option value="5" selected={shoe.quantity === 5 ? "selected" : ""}>5</option>
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
          </select>
        </div>
        <div className={s.trash}>
          <p>
<<<<<<< HEAD
            Eliminar producto del carrito <FaTrashAlt onClick={handleClick} />
=======
            Eliminar producto del carrito <FaTrashAlt onClick={removeItem} />
>>>>>>> cdf4317d6c0db2bba0bc3b6a559baf6d58b1c075
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
