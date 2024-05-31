import "./badge.css";

export const Badge = ({ children, badgeData, color }) => {
  return (
    <div className="badge-container" aria-label={badgeData}>
      {children}
      <div style={{ backgroundColor: color }} className={`badge ${badgeData && "p-2"}`}>
        {badgeData}
      </div>
    </div>
  );
};
