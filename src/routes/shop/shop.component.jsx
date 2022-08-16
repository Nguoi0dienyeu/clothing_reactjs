import { useContext } from "react";
import { ProductContext } from "../../Context/products.context";
import ProductCard from "../../Product-Card/Product-card.component";

const ShopPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container-shop-page">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ShopPage;
