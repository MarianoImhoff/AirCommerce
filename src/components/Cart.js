

import ProductCard from "../commons/ProductCard";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        <ProductCard
         /*  imgPath={shoes[0].url_path}
          brand={shoes[0].brand}
          model={shoes[0].model}
          price={shoes[0].price}
          size={shoes[0].size} */
        />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="subtotal">SUBTOTAL</div>
    </div>
  );
};

export default Cart;
