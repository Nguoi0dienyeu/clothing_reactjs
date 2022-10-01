/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/">
              <div
                className="logo"
                style={{
                  backgroundImage: `url(${homePage})`,
                  backgroundSize: "contain",
                  width: 32,
                  height: 32,
                }}
              ></div>
            </Link>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/auth">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <CartIcon />
          {isCartOpen && <CartDropDown />}
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
