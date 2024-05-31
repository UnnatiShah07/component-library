import { images } from "../assest";
import { Avatar } from "../components";
import { CopyBlock } from "react-code-blocks";
import "./styles.css";

export const AvatarDoc = () => {
  return (
    <div className="doc">
      <h3>Avatar Component</h3>
      <p>The Avatar compoment is used to show user image or entity.</p>
      <h4>Round Avatar</h4>
      <div className="row">
        <Avatar src={images.penguinOne} size="sm" />
        <Avatar src={images.penguinOne} size="md" />
        <Avatar src={images.penguinOne} size="lg" />
        <div className="row">
          <Avatar size="sm">US</Avatar>
          <Avatar size="md">US</Avatar>
          <Avatar size="lg">US</Avatar>
        </div>
      </div>

      <h4>How to use avatar component?</h4>
      <CopyBlock
        text={`//Circle avatar\n<Avatar src={images.penguinOne} size="sm" />\n<Avatar src={images.penguinOne} size="md" />\n<Avatar src={images.penguinOne} size="lg" />\n\n//Circle Named Avatar\n<Avatar size="sm">US</Avatar>\n<Avatar size="md">US</Avatar>\n<Avatar size="lg">US</Avatar>`}
        language={"react"}
        codeBlock
        showLineNumbers={false}
        codeContainerStyle={{ padding: "20px" }}
        wrapLines
      />

      <h4>Square Avatar</h4>
      <div className="row">
        <Avatar src={images.penguinOne} size="sm" variant={"square"} />
        <Avatar src={images.penguinOne} size="md" variant={"square"} />
        <Avatar src={images.penguinOne} size="lg" variant={"square"} />
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
      </div>

      <h4>How to use avatar component?</h4>
      <CopyBlock
        text={`//Square avatar\n<Avatar src={images.penguinOne} size="sm" variant={"square"} />\n<Avatar src={images.penguinOne} size="md" variant={"square"} />\n<Avatar src={images.penguinOne} size="lg" variant={"square"} />\n\n//Square Named Avatar\n<Avatar size="sm" variant={"square"}>US</Avatar>\n<Avatar size="md" variant={"square"}>US</Avatar>\n<Avatar size="lg" variant={"square"}>US</Avatar>`}
        language={"react"}
        codeBlock
        showLineNumbers={false}
        codeContainerStyle={{ padding: "20px" }}
        wrapLines
      />
    </div>
  );
};
