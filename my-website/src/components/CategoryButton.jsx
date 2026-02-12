// Child Component: Category Button
const CategoryButton = ({ title, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(title)}
      className="category-button"
    >
      {title}
    </button>
  );
};

export default CategoryButton;