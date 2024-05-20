import { Routes, Route } from "react-router-dom";
import { ComponentLibrary, LandingPage } from "../pages";
import { Header } from "../components";
import { AvatarDoc } from "../documentation/AvatarDoc";

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<ComponentLibrary />} />
        <Route path="/components/avatar" element={<AvatarDoc />} />
      </Routes>
    </>
  );
};
