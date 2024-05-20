import "./card.css";
import { RxCross1 } from "react-icons/rx";

export const Card = ({
  isShadow,
  isDismiss,
  cardTitle,
  onDismiss,
  children,
  style
}) => {
  return (
    <div style={style} className={`card ${isShadow && "shadow-card"}`}>
      <header>
        <p className="title">{cardTitle}</p>
        {isDismiss && (
          <div className="dismiss" onClick={onDismiss}>
            <RxCross1 />
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
