import "./checkout-item.style.scss";

const CheckOutItem = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item-image">
        <img src={imgUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
