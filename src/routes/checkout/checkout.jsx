import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CheckOutItem from "../../Component/checkout-item/checkout-item";
import { CartConext } from "../../Context/cart.context";
import "./checkout.style.scss";
const CheckOut = () => {
  const [loading, setLoading] = useState(false);

  const { cartItems, total } = useContext(CartConext);
  useEffect(() => {
    if (cartItems.length > 0) {
      setLoading(true);
    }
  }, [cartItems.length]);
  return (
    <Spin loading={loading}>
      <div className="container-checkout">
        <div className="checkout-header">
          <div className="header-tabs">
            <p className="header-tabs-text">Production</p>
          </div>
          <div className="header-tabs">
            <p className="header-tabs-text">Descriptions</p>
          </div>
          <div className="header-tabs">
            <p className="header-tabs-text">Quantity</p>
          </div>
          <div className="header-tabs">
            <p className="header-tabs-text">Price</p>
          </div>
          <div className="header-tabs">
            <p className="header-tabs-text">Remove</p>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="footer">
          <span className="header-tabs-total">Total: ${total}</span>
        </div>
      </div>
    </Spin>
  );
};

export default CheckOut;
