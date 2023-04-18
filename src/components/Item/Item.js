import "./item.css";

const Item = ({ isSelected, children, onSelectedChange }) => {
  const clsIsSelected = isSelected ? "" : "";
  return (
    <div className={`item ${clsIsSelected}`} onClick={() => onSelectedChange(!isSelected)}>
      {children}
    </div>
  );
};

export default Item;

