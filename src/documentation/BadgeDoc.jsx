import { images } from "../assest";
import { Avatar, Badge } from "../components";
import { CopyBlock } from "react-code-blocks";
import { IoCart } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import "./styles.css";

export const BadgeDoc = () => {
  return (
    <div className="doc">
      <h3>Badge Component</h3>
      <p>The Badge compoment is used to show short information, lables and status.</p>

      <div style={{ display: "flex", alignItems: "center", gap: 15, marginTop: 20 }}>
        <Badge color={"#1FC71F"}>
          <Avatar src={images.penguinOne} size="md" />
        </Badge>
        <Badge color={"#9a9a9a"} badgeData={4}>
          <IoCart size={40} />
        </Badge>
        <Badge color={"#9a9a9a"} badgeData={"44+"}>
          <IoMdMail size={40} />
        </Badge>
      </div>

      <h4>How to use badge component?</h4>
      <CopyBlock
        text={`<Badge color={"#1FC71F"}><Avatar src={images.penguinOne} size="md" /></Badge>\n<Badge color={"#9a9a9a"} badgeData={4}><IoCart size={40} /></Badge>\n<Badge color={"#9a9a9a"} badgeData={"44+"}><IoMdMail size={40} /></Badge>`}
        language={"react"}
        codeBlock
        showLineNumbers={false}
        codeContainerStyle={{ padding: "20px" }}
        wrapLines
      />
    </div>
  );
};
