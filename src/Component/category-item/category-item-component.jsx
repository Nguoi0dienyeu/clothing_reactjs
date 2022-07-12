import "./category-item-styles.scss";

const CategoryItem = ({ category }) => {
  const { background, title } = category;
  return (
    <>
      <div className="categori-container">
        <div
          className="categori-background"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        {/* <Image preview={false} src={imgUrl ? imgUrl : imgUrl} /> */}
        <div className="categori-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
