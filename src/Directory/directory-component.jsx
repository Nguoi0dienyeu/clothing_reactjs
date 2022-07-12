import CategoryItem from "../Component/category-item/category-item-component";

const DirectoryComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default DirectoryComponent;
