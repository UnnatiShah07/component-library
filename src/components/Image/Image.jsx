import "./image.css";

export const Image = ({ src, alt, style, variant }) => {
  const variantStyle =
    variant === "square" ? "image-square" : "image-rectangle";
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={`${variantStyle} responsive`}
    />
  );
};
