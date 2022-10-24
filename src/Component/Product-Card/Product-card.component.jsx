import { useContext } from "react";
import { CartConext } from "../../Context/cart.context";
import "./Product-Card.style.scss";

const ProductCard = ({ product }) => {
  const { name, price, imgUrl } = product;
  const { addItemToCart } = useContext(CartConext);

  const addProducToCart = () => {
    addItemToCart(product);
  };

  return (
    <div class="card-product">
      <img src={imgUrl} alt={`${name}`} />
      <div class="products-title">
        <p class="name-title">{name}</p>
        <p class="price-title">{price}</p>
      </div>
      <div className="products-button">
        <button type="submit" class="btn btn-primary btn-sm">
          <p className="button-submit" onClick={addProducToCart}>
            Add to cart
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
