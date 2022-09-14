import "./checkout-item.style.scss";
import { CartConext } from "../../Context/cart.context";
import { useContext } from "react";
const CheckOutItem = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  const { clearItemFormCart, addItemToCart, removeItemToCart } =
    useContext(CartConext);
  const handlerClearCartItem = () => clearItemFormCart(cartItem);
  const handlerAddItemToCart = () => addItemToCart(cartItem);
  const handlerRemoveItemToCart = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item">
      <div className="checkout-item-image">
        <img src={imgUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow-count" onClick={handlerRemoveItemToCart}>
          <label>&#10094;</label>
        </div>
        <div className="arrow-value">{quantity}</div>
        <div className="arrow-count" onClick={handlerAddItemToCart}>
          <label>&#10095;</label>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handlerClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
