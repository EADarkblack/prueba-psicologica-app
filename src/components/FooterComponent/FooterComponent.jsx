import React from "react";

//Style
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-subcontainer">
        <p className="info-footer">
          Aplicativo desarrollado por: Wilmar Fernando Miguez Bolaños - Grupo:
          700004_1913 / Ingeniería de Sistemas
        </p>
        <p className="info-footer">
          Jesús Eduardo Osorio Vargas - Grupo: 700004_1972, / Psicología
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
