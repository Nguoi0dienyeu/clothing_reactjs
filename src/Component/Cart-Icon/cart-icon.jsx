import { Fragment } from "react";
import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartConext } from "../../Context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartConext);
  const toggleCartOpenIcon = () => setIsCartOpen(!isCartOpen);
  return (
    <Fragment>
      <div className="cart-icon-container" onClick={toggleCartOpenIcon}>
        <ShoppingIcon className="shopping-icon" />
        <span className="position-absolute top-48 start-50 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      </div>
    </Fragment>
  );
};

export default CartIcon;
