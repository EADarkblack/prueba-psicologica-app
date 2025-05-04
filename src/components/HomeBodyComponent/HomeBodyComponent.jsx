import {
  Box,
  Button,
  Container,
  Fade,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TrapFocus from "@mui/material/Unstable_TrapFocus";
import { useNavigate } from "react-router";
import React from "react";

//Style
import "./HomeBodyComponent.css";

const HomeBodyComponent = () => {
  const history = useNavigate();

  const handleAcceptConditions = () => {
    history("/formulario");
  };

  const handleRejectConditions = () => {
    console.log("Rechazar terminos y condiciones");
  };

  return (
    <div className="home-body-container">
      <div className="home-body-subcontainer">
        <div className="logo-container">
          <img width={175} src="/assets/logo-unad-1.png" alt="" />
          <img width={400} src="/assets/sissu-logo.png" alt="" />
        </div>
        <div className="terms-and-conditions-container">
          <Container
            className="terms-and-conditions-text-container"
            component="main"
            sx={{ pt: 3 }}
          >
            <Typography
              className="terms-and-conditions-content"
              variant="h4"
              sx={{ marginBottom: 2 }}
            >
              Bienvenido/a a esta aplicación de tamizaje psicológico
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              Esta herramienta ha sido desarrollada como parte de un trabajo
              académico universitario, con fines exclusivamente educativos y de
              prevención.
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              Como parte del proceso, se recopilarán algunos datos personales
              como tu nombre, correo electrónico, edad y género.
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              Esta información se usará únicamente para dar validez al
              desarrollo del proyecto según los requerimientos académicos.
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              No será compartida con terceros ni utilizada con fines comerciales
              o clínicos.
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              Es importante tener en cuenta que esta aplicación no constituye
              una evaluación psicológica profesional, ni reemplaza un
              diagnóstico médico o psicológico.
            </Typography>
            <Typography
              className="terms-and-conditions-content"
              sx={{ marginBottom: 2 }}
            >
              Si experimentas malestar emocional o consideras que podrías
              necesitar ayuda, te recomendamos acudir a un profesional de la
              salud mental.
            </Typography>
          </Container>
          <TrapFocus open disableAutoFocus disableEnforceFocus>
            <Fade appear={true} in={true}>
              <Paper
                role="dialog"
                aria-modal="true"
                aria-label=""
                square
                variant="outlined"
                tabIndex={-1}
                sx={{
                  bottom: 0,
                  left: 0,
                  right: 0,
                  mt: 2,
                  p: 0,
                  borderWidth: 0,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{
                    justifyContent: "flex-end",
                    gap: 3,
                    backgroundColor: "transparent",
                  }}
                >
                  <Stack
                    direction={{
                      xs: "row-reverse",
                      sm: "row",
                    }}
                    sx={{
                      gap: 4,
                      flexShrink: 0,
                      alignSelf: {
                        xs: "flex-end",
                        sm: "center",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Button
                      size="small"
                      onClick={handleAcceptConditions}
                      variant="contained"
                      disableRipple
                    >
                      Aceptar
                    </Button>
                    <Button
                      size="small"
                      onClick={handleRejectConditions}
                      disableRipple
                    >
                      Rechazar
                    </Button>
                  </Stack>
                </Stack>
              </Paper>
            </Fade>
          </TrapFocus>
        </div>
      </div>
    </div>
  );
};

export default HomeBodyComponent;
