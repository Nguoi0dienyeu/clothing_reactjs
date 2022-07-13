import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./nav.styles.scss";
const Navigation = () => {
  const shoppingCart = "https://cdn-icons-png.flaticon.com/512/891/891462.png";
  const homePage = "https://cdn-icons-png.flaticon.com/512/6488/6488535.png";
  return (
    <Fragment>
      <div className="navigation-bar">
        <div
          className="logo"
          style={{
            backgroundImage: `url(${homePage})`,
          }}
        ></div>
        <div className="navigation-menu">
          <ul>
            <li>
              <a href="1">Shop</a>
            </li>
            <li>
              <a href="1">Contact</a>
            </li>
            <li>
              <a href="1">Wallet</a>
            </li>
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
