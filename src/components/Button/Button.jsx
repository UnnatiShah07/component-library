import "./button.css";

const ButtonComp = ({
  text,
  onClick,
  disabled,
  varientStyle,
  disabledStyle
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${varientStyle} ${disabled && disabledStyle}`}
    >
      {text}
    </button>
  );
};

export const Button = ({
  text,
  variant,
  onClick,
  disabled,
  href,
  startIcon,
  endIcon
}) => {
  const varientStyle =
    variant === "text"
      ? "text"
      : variant === "outlined"
      ? "outlined"
      : "contained";
  const disabledStyle =
    variant === "text"
      ? "disabled-text"
      : variant === "outlined"
      ? "disabled-outlined"
      : "disabled-contained";
  return href ? (
    <a href={href}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`button ${varientStyle} ${disabled && disabledStyle}`}
      >
        {startIcon}
        {text}
        {endIcon}
      </button>
    </a>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${varientStyle} ${disabled && disabledStyle}`}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};
