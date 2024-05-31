import { useComponentContext } from "../../context";
import { AlertDoc } from "../AlertDoc";
import { AvatarDoc } from "../AvatarDoc";
import { BadgeDoc } from "../BadgeDoc";
import "./sideNavWrapper.css";

export const SideNavWrapper = () => {
  const {
    state: { activeComponent },
    dispatch,
  } = useComponentContext();

  const updateActiveComp = (componentName) => {
    dispatch({ type: "UPDATE_ACTIVE_COMPONENT", payload: componentName });
  };

  return (
    <div className="wrapper">
      <div className="sidebar">
        <p onClick={() => updateActiveComp("avatar")}>Avatar</p>
        <p onClick={() => updateActiveComp("alert")}>Alert</p>
        <p onClick={() => updateActiveComp("badge")}>Badge</p>
      </div>
      <div>{activeComponent === "avatar" ? <AvatarDoc /> : activeComponent === "alert" ? <AlertDoc /> : activeComponent === "badge" ? <BadgeDoc /> : null}</div>
    </div>
  );
};
