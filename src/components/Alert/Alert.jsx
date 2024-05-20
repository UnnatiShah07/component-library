import "./alert.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { colors } from "../../styles/colors";

export const Alert = ({ severity, children, action }) => {
  const severityStyle =
    severity === "info"
      ? "alert-info"
      : severity === "warning"
      ? "alert-warning"
      : severity === "error"
      ? "alert-error"
      : "alert-success";
  const getAlertIcon = () =>
    severity === "info" ? (
      <AiOutlineInfoCircle size={"1.3em"} color={colors.infoIcon} />
    ) : severity === "warning" ? (
      <AiOutlineWarning size={"1.3em"} color={colors.warningIcon} />
    ) : severity === "error" ? (
      <MdErrorOutline size={"1.3em"} color={colors.errorIcon} />
    ) : (
      <BsCheckCircle size={"1.1em"} color={colors.successIcon} />
    );
  return (
    <div className={`alert-box ${severityStyle}`} tabIndex={0}>
      <div className="text-container">
        {getAlertIcon()}
        <p>{children}</p>
      </div>
      <div className="action">{action}</div>
    </div>
  );
};
