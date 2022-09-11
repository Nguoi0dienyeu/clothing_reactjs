import "./cart-item.style.scss";

const CartItemProduct = ({ cartItem }) => {
  const { name, quantity, imgUrl, price } = cartItem;
  return (
    <div className="product-toggle">
      <div className="pro-image">
        <img src={imgUrl} alt={`${name}`} />
      </div>
      <div className="product-details">
        <span className="pro-name">{name}</span>
        <span className="pro-summary">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemProduct;
