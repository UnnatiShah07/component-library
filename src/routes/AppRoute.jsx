import { Routes, Route } from "react-router-dom";
import { ComponentLibrary, LandingPage } from "../pages";
import { Header } from "../components";

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </>
  );
};
