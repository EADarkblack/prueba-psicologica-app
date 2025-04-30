import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ResultBodyComponent = () => {
  const history = useNavigate();

  const source = localStorage.getItem("source");

  const resultFromLS = JSON.parse(localStorage.getItem("results")) || [];

  const [k10] = resultFromLS?.filter((result) => result.type === "k10");

  const [who5] = resultFromLS?.filter((result) => result.type === "who5");

  const [phq9] = resultFromLS?.filter((result) => result.type === "phq9");

  const [gad7] = resultFromLS?.filter((result) => result.type === "gad7");

  const [gads] = resultFromLS?.filter((result) => result.type === "gads");

  const handleRedirect = () => {
    localStorage.removeItem("results");
    localStorage.removeItem("source");
    history("/");
  };

  return (
    <div className="home-body-container">
      <div className="home-body-subcontainer">
        <div
          className="terms-and-conditions-container"
          style={{
            maxHeight: "40rem",
            overflowY: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {!source && (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Tus resultados
              </Typography>
              <Box
                sx={{
                  marginBottom: 2,
                  border: "1px solid gray",
                  padding: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "0.5rem",
                }}
              >
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                  Kessler Psychological Distress Scale: {k10?.score} puntos.
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Nivel de malestar psicológico:</strong> {k10?.level}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Observaciones generales:</strong> {k10?.description}
                </Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                  World Health Organization-Five Well-Being Index: {who5?.score}{" "}
                  puntos.
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Nivel de bienestar emocional:</strong> {who5?.level}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Interpretación general:</strong> {who5?.description}
                </Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                  Patient Health Questionnaire 9: {phq9?.score} puntos.
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Nivel de depresión:</strong> {phq9?.level}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Interpretación general:</strong> {phq9?.description}
                </Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                  Generalized Anxiety Disorder 7: {gad7?.score} puntos.
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Nivel de ansiedad:</strong> {gad7?.level}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Interpretación general:</strong> {gad7?.description}
                </Typography>
                <Typography color="primary" sx={{ fontWeight: "bold" }}>
                  Goldberg Anxiety and Depression Scale: {gads?.score} puntos.
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Nivel de ansiedad:</strong> {gads?.level}
                </Typography>
                <Typography sx={{ ml: 2 }}>
                  <strong>* Interpretación general:</strong> {gads?.description}
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Enlaces de interés
            </Typography>
            <Box
              sx={{
                marginBottom: 2,
                border: "1px solid gray",
                padding: "1rem",
                borderRadius: "1rem",
                display: "flex",
                flexDirection: "column",
                rowGap: "0.5rem",
              }}
            >
              <Typography>
                Si los resultados indican que podrías estar experimentando
                síntomas relacionados con la ansiedad o la depresión, te
                invitamos a buscar apoyo profesional. A continuación, te
                compartimos algunos recursos y líneas de atención gratuitas
                donde puedes recibir orientación y apoyo emocional en Colombia:
              </Typography>
              <Typography color="primary" sx={{ fontWeight: "bold" }}>
                Línea 106 – Secretaría de Salud de Bogotá
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Teléfono: <strong>106</strong>
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                WhatsApp: <strong>300 754 8933</strong>
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Horario: Disponible 24 horas, todos los días
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Sitio web:{" "}
                <a
                  href="https://www.saludcapital.gov.co/Paginas2/Inicio.aspx"
                  target="_blank"
                >
                  www.saludcapital.gov.co
                </a>
              </Typography>
              <Typography color="primary" sx={{ fontWeight: "bold" }}>
                Línea 192 – Ministerio de Salud y Protección Social
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Teléfono: <strong>192, opción 4</strong>
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Horario: Disponible 24 horas, todos los días
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Sitio web:{" "}
                <a
                  href="https://www.minsalud.gov.co/Portada/index.html"
                  target="_blank"
                >
                  www.minsalud.gov.co
                </a>
              </Typography>
              <Typography color="primary" sx={{ fontWeight: "bold" }}>
                Fundación ANAED
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Sitio web:{" "}
                <a href="https://fundacionanaed.org" target="_blank">
                  www.fundacionanaed.org
                </a>
              </Typography>
              <Typography color="primary" sx={{ fontWeight: "bold" }}>
                Fundación Santa Fe de Bogotá
              </Typography>
              <Typography sx={{ ml: 2, fontSize: "0.9rem" }}>
                Sitio web:{" "}
                <a href="https://fundacionsantafedebogota.com" target="_blank">
                  www.fundacionsantafedebogota.com
                </a>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleRedirect}>
              Volver al inicio
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ResultBodyComponent;
