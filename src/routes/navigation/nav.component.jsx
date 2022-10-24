/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { CartConext } from "../../Context/cart.context";
import CartIcon from "../../Component/Cart-Icon/cart-icon";
import CartDropDown from "../../Component/cart-dropdown/cart-dropdown";
import "./nav.styles.scss";

import { useContext } from "react";
import { useAuth } from "../../Context/user.context";
const Navigation = () => {
  const { currentUser } = useAuth();
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
                <Link className="nav-link" to="/sign-in">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <CartIcon />
          {isCartOpen && <CartDropDown />}
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <Link to={"/profile"}>{currentUser && currentUser.email}</Link>
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
      {/* footer */}
      <div className="container footer-navigation">
        <div className="row flex-col-sm-3">
          <div className="col-sm-4 fist-columns">
            <Link to="/">
              <div
                className="container footer-navigation logo"
                style={{
                  backgroundImage: `url(${homePage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: 64,
                  height: 64,
                }}
              ></div>
            </Link>
            <div className="footer-text">
              <p>Clothing wear</p>
            </div>
          </div>
          <div className="col-sm-4 two-columns">
            <span>
              Address: <p>NewZelande 2211-111-14441</p>
            </span>
            <span>
              Call me: <p>0974280876</p>
            </span>
            <span>
              Email: <p>NewZelande 2211-111-14441</p>
            </span>
          </div>
          <div className="col-sm-4">
            <label>Follow me</label>
            <div className="socials-network">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Navigation;
