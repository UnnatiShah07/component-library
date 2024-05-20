import "./text.css";

export const Text = ({ children, color, fontSize, fontWeight, style }) => {
  return (
    <p style={{ color, fontSize, fontWeight, ...style }} className="typography">
      {children}
    </p>
  );
};
