import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { CartConext } from "../../Context/cart.context";
import CartIcon from "../../Component/Cart-Icon/cart-icon";
import CartDropDown from "../../Component/cart-dropdown/cart-dropdown";

import "./nav.styles.scss";
import { useContext } from "react";
const Navigation = () => {
  const homePage = "https://cdn-icons-png.flaticon.com/512/6488/6488535.png";

  const { isCartOpen } = useContext(CartConext);
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo" to="/">
          <div
            className="logo"
            style={{
              backgroundImage: `url(${homePage})`,
            }}
          ></div>
        </Link>
        <div className="navigation-menu">
          <ul>
            <li>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-link">sign out</li>
            <li>
              <Link className="nav-link" to="/auth">
                sign in
              </Link>
            </li>
            <li></li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
