import React from "react";

//Components
import ResultBodyComponent from "../../components/ResultBodyComponent/ResultBodyComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const ResultScreen = () => {
  return (
    <>
      <NavbarComponent />
      <ResultBodyComponent />
      <FooterComponent />
    </>
  );
};

export default ResultScreen;
