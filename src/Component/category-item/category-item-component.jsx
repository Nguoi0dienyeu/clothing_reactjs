import "./category-item-styles.scss";

const CategoryItem = ({ category }) => {
  const { imgUrl, title } = category;
  return (
    <>
      <div className="categori-container">
        <div className="categori-background">
          {/* <img src={imgUrl} alt={`${title}`} /> */}
        </div>
        <div className="categori-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
