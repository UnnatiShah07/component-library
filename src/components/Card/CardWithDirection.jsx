import "./cardWithDirection.css";
import "./card.css";

export const CardWithDirection = ({ children, image, direction }) => {
  const isVertical = direction === "vertical";

  return (
    <div
      className={`horizontal-card shadow-card ${isVertical && "card-vertical"}`}
    >
      <img className={isVertical && `img-vertical`} src={image} alt="" />
      <div className="content">{children}</div>
    </div>
  );
};
