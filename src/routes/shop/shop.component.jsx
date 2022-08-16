import { useContext } from "react";
import { ProductContext } from "../../context/produc.context";

const ShopPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container-shop-page">
      {products.map(({ name, id }) => (
        <div className="product-container" key={id}>
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
