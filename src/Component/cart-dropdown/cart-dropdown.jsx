import { Fragment } from "react";
import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";
import { CartConext } from "../../Context/cart.context";
import CartItemProduct from "../cart-item/cart-item.component";
import { useContext } from "react";
const CartDropDown = () => {
  const { cartItems } = useContext(CartConext);
  const navigate = useNavigate();

  const handlerGoToCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-list-items">
          {cartItems.map((item) => (
            <CartItemProduct key={item.id} cartItem={item} />
          ))}
        </div>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          onClick={handlerGoToCheckOut}
        >
          <p>go to checkout</p>
        </button>
      </div>
    </Fragment>
  );
};
export default CartDropDown;
