import { FaTrashAlt } from "react-icons/fa";

const ProductCard = ({ imgPath, brand, model, size, price }) => {
  return (
    <div className="product-card">
      <div className="photo">
        <img src={imgPath} alt="" />
      </div>
      <div className="details">
        <ul>
          <li>Marca: {brand}</li>
          <li>Modelo: {model}</li>
          <li>Talle: {size}</li>
          <li>Precio: ARS {price}</li>
        </ul>
        <div>
          <label>Cantidad: </label>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="trash">
          <p>Eliminar producto del carrito  <FaTrashAlt /></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
