import { Button } from "antd";
import "../Product-Card/Product-Card.style.scss";

const ProductCard = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
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
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
