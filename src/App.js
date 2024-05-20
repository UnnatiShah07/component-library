import { images } from "./assest";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Heading,
  CardWithDirection,
  Image,
  Text
} from "./components";
import { FaUserCircle } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { colors } from "./styles/colors";
import { AppRoutes } from "./routes/AppRoute";

export default function App() {
  return <AppRoutes />;

}
