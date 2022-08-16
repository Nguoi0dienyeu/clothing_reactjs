import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./nav.styles.scss";
const Navigation = () => {
  const shoppingCart = "https://cdn-icons-png.flaticon.com/512/891/891462.png";
  const homePage = "https://cdn-icons-png.flaticon.com/512/6488/6488535.png";
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
            <li>
              <Link className="nav-link" to="/auth">
                sign in
              </Link>
            </li>
            <li></li>
            <li>
              <div
                className="shoping-cart"
                style={{
                  backgroundImage: `url(${shoppingCart})`,
                }}
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
