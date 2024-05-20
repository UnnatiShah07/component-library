import "./sideNavWrapper.css";

export const SideNavWrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <p>SideNavWrapper</p>
      <div>{children}</div>
    </div>
  );
};
