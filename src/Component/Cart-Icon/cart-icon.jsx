import { Fragment } from "react";
import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartConext } from "../../Context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartConext);
  const toggleCartOpenIcon = () => setIsCartOpen(!isCartOpen);
  return (
    <Fragment>
      <div className="cart-icon-container" onClick={toggleCartOpenIcon}>
        <ShoppingIcon className="shopping-icon" />
        <span className="custom-count-icon">0</span>
      </div>
    </Fragment>
  );
};

export default CartIcon;
