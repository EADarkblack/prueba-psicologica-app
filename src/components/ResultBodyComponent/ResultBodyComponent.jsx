import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ResultBodyComponent = () => {
  //TODO: Agregar resultados y enlaces de interés
  const history = useNavigate();

  const source = localStorage.getItem("source");

  console.log(source);

  const handleRedirect = () => {
    history("/");
  };

  return (
    <div className="home-body-container">
      <div className="home-body-subcontainer">
        <div className="terms-and-conditions-container">
          {!source && (
            <Box>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Tu resultado
              </Typography>
              <Typography
                sx={{
                  marginBottom: 2,
                  border: "1px solid gray",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                Estos son los resultados de tu cuestionario. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Consectetur voluptates,
                doloremque quibusdam repellendus animi consequatur aut eveniet,
                dicta soluta obcaecati ea illum, officiis itaque nostrum esse
                adipisci minima voluptatibus nihil.
              </Typography>
            </Box>
          )}
          <Box>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Enlaces de interés
            </Typography>
            <Typography
              sx={{
                marginBottom: 2,
                border: "1px solid gray",
                padding: "1rem",
                borderRadius: "1rem",
              }}
            >
              Estos son los resultados de tu cuestionario.
            </Typography>
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
