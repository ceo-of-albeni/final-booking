import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";

const Routing = () => {
  return (
    <Routes>
      {/* users routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
