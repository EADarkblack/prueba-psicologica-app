import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

//Pages
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import FormScreen from "../pages/FormScreen/FormScreen";
import TestScreen from "../pages/TestScreen/TestScreen";
import ResultScreen from "../pages/ResultScreen/ResultScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/formulario" element={<FormScreen />} />
        <Route path="/cuestionario" element={<TestScreen />} />
        <Route path="/resultado" element={<ResultScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
