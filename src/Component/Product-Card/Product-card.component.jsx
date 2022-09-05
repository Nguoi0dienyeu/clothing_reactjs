import { Button } from "antd";
import { Fragment } from "react";
import "./Product-Card.style.scss";

const ProductCard = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
    <Fragment>
      <div className="container-products-card">
        <img src={imgUrl} alt={`${name}`} />
        <div className="card">
          <span className="name-card">
            <p className="text-name-card">{name}</p>
          </span>
          <span className="price-card">
            <p className="text-name-card">{price}</p>
          </span>
        </div>
        <Button htmlType="submit" type="primary" className="button-card">
          <p className="button-text">Add to card</p>
        </Button>
      </div>
    </Fragment>
  );
};

export default ProductCard;
