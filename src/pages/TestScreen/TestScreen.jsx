import React from "react";
import TestBodyComponent from "../../components/TestBodyComponent/TestBodyComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const TestScreen = () => {
  return (
    <>
      <NavbarComponent />
      <TestBodyComponent />
      <FooterComponent />
    </>
  );
};

export default TestScreen;
