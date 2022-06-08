import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import s from '../styles/ProductCard.module.css';

const ProductCard = ({ shoe, handleQuantity, handleRemoveItem }) => {
  const handleChange = (event) => {
    handleQuantity(shoe.id, event.target.value);
  };

  const handleClick = () => {
    handleRemoveItem(shoe.id);
  };

  return (
    <div className={s.productCard} key={shoe.id}>
      <div className={s.imageContainer}>
        <Link to={`/product_view/${shoe.id}`}>
          <img
            className={s.image}
            src={require(`../utils/img${shoe.url_path}`)}
            alt={shoe.model}
          />
        </Link>
      </div>
      <div className={s.details}>
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
          </select>
        </div>
        <div className={s.trash}>
          <p>
            Eliminar producto del carrito <FaTrashAlt onClick={handleClick} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
