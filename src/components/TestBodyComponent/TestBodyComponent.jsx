import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";

const TestBodyComponent = () => {
  const history = useNavigate();

  const [questions, setQuestions] = useState({});

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Cuestionario 1",
      name: "question_1",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      name: "question_2",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      name: "question_3",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    setQuestions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    //TODO: Enviar los datos a la base de datos y hacer el calculo para mostrar la info del final
    console.log("datos", questions);
    localStorage.removeItem("source");
    history("/resultado");
  };

  return (
    <div className="home-body-container">
      <div className="home-body-subcontainer">
        <div className="terms-and-conditions-container">
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                bgcolor: "background.default",
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 255, width: "100%" }}>
              <Typography> {steps[activeStep].description}</Typography>

              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontSize: "0.9rem", mt: 2 }}
                >
                  En una escala del 1 al 5, donde 1 es no estoy de acuerdo y 5
                  es completamente de acuerdo, selecciona:
                </FormLabel>
                <RadioGroup
                  key={steps[activeStep].name}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name={steps[activeStep].name}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  onChange={handleChange}
                  value={questions[steps[activeStep].name]}
                >
                  <FormControlLabel value={1} control={<Radio />} label="1" />
                  <FormControlLabel value={2} control={<Radio />} label="2" />
                  <FormControlLabel value={3} control={<Radio />} label="3" />
                  <FormControlLabel value={4} control={<Radio />} label="4" />
                  <FormControlLabel value={5} control={<Radio />} label="5" />
                </RadioGroup>
              </FormControl>
            </Box>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                activeStep === maxSteps - 1 ? (
                  <Button size="small" onClick={handleSubmit}>
                    Finalizar
                  </Button>
                ) : (
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                )
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TestBodyComponent;
