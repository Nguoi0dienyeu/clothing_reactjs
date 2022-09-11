import { Fragment } from "react";
import "./cart-dropdown.style.scss";
import { CartConext } from "../../Context/cart.context";
import CartItemProduct from "../cart-item/cart-item.component";
import { useContext } from "react";
const CartDropDown = () => {
  const { cartItems } = useContext(CartConext);
  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-list-items">
          {cartItems.map((item) => (
            <CartItemProduct key={item.id} cartItem={item} />
          ))}
        </div>
        <button className="checkout-items">
          <p>go to checkout</p>
        </button>
      </div>
    </Fragment>
  );
};
export default CartDropDown;
