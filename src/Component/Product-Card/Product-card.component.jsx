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
    <div class="row row-cols-1">
      <div class="col row-card-body">
        <div class="card-product">
          <img src={imgUrl} alt={`${name}`} />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h5 class="card-title">{price}</h5>
          </div>
          <button type="submit" className="button-submit">
            <p className="button-submit" onClick={addProducToCart}>
              Add to cart
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
