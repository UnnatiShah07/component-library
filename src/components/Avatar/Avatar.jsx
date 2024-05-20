import "./avatar.css";

export const Avatar = ({ src, alt, children, size, variant }) => {
  const sizeStyle = size === "lg" ? "lg" : size === "sm" ? "sm" : "md";
  const fontSize =
    size === "lg" ? "lg-font" : size === "sm" ? "sm-font" : "md-font";
  const variantStyle = variant === "square" ? "square" : "round";

  return (
    <div className="avatar">
      {src && (
        <img className={`${sizeStyle} ${variantStyle}`} src={src} alt={alt} />
      )}
      {children && (
        <div className={`letter-avatar ${variantStyle} ${sizeStyle}`}>
          <p className={`${fontSize} font-bold`}>{children}</p>
        </div>
      )}
    </div>
  );
};
