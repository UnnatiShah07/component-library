import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1>SketchView</h1>
      <div>
        <input placeholder="Search for components" type="text" />
        <button>Search</button>
      </div>
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/components" className="link">
          Components
        </Link>
      </div>
    </header>
  );
};
