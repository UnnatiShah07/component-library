import { images } from "../assest";
import { Avatar } from "../components";
import { SideNavWrapper } from "./SideNavWrapper/SideNavWrapper";

export const AvatarDoc = () => {
  return (
    <SideNavWrapper>
      <h3>Avatar</h3>
      <div className="row">
        <Avatar src={images.penguinOne} size="sm" />
        <Avatar src={images.penguinOne} size="md" />
        <Avatar src={images.penguinOne} size="lg" />
      </div>

      <div className="row">
        <Avatar size="sm">US</Avatar>
        <Avatar size="md">US</Avatar>
        <Avatar size="lg">US</Avatar>
      </div>

      <div className="row">
        <Avatar src={images.penguinOne} size="sm" variant={"square"} />
        <Avatar src={images.penguinOne} size="md" variant={"square"} />
        <Avatar src={images.penguinOne} size="lg" variant={"square"} />
      </div>

      <div className="row">
        <Avatar size="sm" variant={"square"}>
          US
        </Avatar>
        <Avatar size="md" variant={"square"}>
          US
        </Avatar>
        <Avatar size="lg" variant={"square"}>
          US
        </Avatar>
      </div>
    </SideNavWrapper>
  );
};
