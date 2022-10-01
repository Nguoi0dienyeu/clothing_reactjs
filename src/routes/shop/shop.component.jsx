import { Fragment, useContext } from "react";
import { ProductContext } from "../../Context/products.context";
import ProductCard from "../../Component/Product-Card/Product-card.component";
import "./shop.component.styls.scss";
const ShopPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <Fragment>
      <div className="header-container">
        <p className="header-proudct">Product Newest</p>
      </div>
      <div className="container-shop-page">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </Fragment>
  );
};

export default ShopPage;
