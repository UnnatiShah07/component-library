import { images } from "../assest";
import { Alert, Avatar } from "../components";
import { CopyBlock } from "react-code-blocks";
import "./styles.css";

export const AlertDoc = () => {
  return (
    <div className="doc">
      <h3>Alert Component</h3>
      <p>The Alert compoment is used to show different messages with different status.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 15, marginTop: 20 }}>
        <Alert severity={"success"}>This is success alert.</Alert>
        <Alert severity={"info"}>This is inforamtion alert.</Alert>
        <Alert severity={"error"}>This is error alert.</Alert>
        <Alert severity={"warning"}>This is warning alert.</Alert>
      </div>
      <h4>How to use alert component?</h4>
      <CopyBlock
        text={`<Alert severity={"success"}>This is success alert.</Alert>\n<Alert severity={"info"}>This is inforamtion alert.</Alert>\n<Alert severity={"error"}>This is error alert.</Alert>\n<Alert severity={"warning"}>This is warning alert.</Alert>`}
        language={"react"}
        codeBlock
        showLineNumbers={false}
        codeContainerStyle={{ padding: "20px" }}
        wrapLines
      />
    </div>
  );
};
