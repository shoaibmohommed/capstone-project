import "./index.scss";
const CategoryItem = ({ title, imageUrl }) => (
  <div className="category-item">
    <div
      className="background-image"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryItem;
