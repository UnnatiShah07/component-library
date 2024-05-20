import "./landingPage.css";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h2>Ready to use component library</h2>
      <p>
        Collection of React components which are ready to use in your project
      </p>
      <button onClick={() => navigate("/components")}>Get Started</button>
    </div>
  );
};
