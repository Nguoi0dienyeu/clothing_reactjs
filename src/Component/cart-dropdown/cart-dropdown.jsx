import { Fragment } from "react";
import "./cart-dropdown.style.scss";

const CartDropDown = () => {
  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-list-items"></div>
        <button className="checkout-items">
          <p>go to checkout</p>
        </button>
      </div>
    </Fragment>
  );
};
export default CartDropDown;
