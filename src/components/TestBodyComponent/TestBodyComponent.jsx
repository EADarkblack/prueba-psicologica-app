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

//Data
import questionaryData from "../../json/QuestionaryData.json";

const TestBodyComponent = () => {
  const history = useNavigate();

  const [questions, setQuestions] = useState({});

  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const steps = questionaryData.data;

  const maxSteps = steps.length;

  const handleNext = () => {
    const currentQuestionName = steps[activeStep].name;

    if (!questions[currentQuestionName]) {
      alert("Por favor selecciona una opción antes de continuar.");
      return;
    }

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
    let newDiagnoses = [];

    // K10
    const k10Values = Object.entries(questions)
      .filter(([key]) => key.includes("k10"))
      .map(([_, value]) => Number(value));
    const k10total = k10Values.reduce((acc, val) => acc + val, 0);

    if (k10total >= 10 && k10total <= 15) {
      newDiagnoses.push({
        type: "k10",
        score: k10total,
        level: "Bajo",
        description: "Poca Probabilidad de presentar un trastorno mental",
      });
    } else if (k10total >= 16 && k10total <= 21) {
      newDiagnoses.push({
        type: "k10",
        score: k10total,
        level: "Medio",
        description: "Posible malestar leve; se recomienda monitoreo",
      });
    } else if (k10total >= 22 && k10total <= 29) {
      newDiagnoses.push({
        type: "k10",
        score: k10total,
        level: "Alto",
        description:
          "Probable presencia de un trastorno de ansiedad o depresión",
      });
    } else if (k10total >= 30 && k10total <= 50) {
      newDiagnoses.push({
        type: "k10",
        score: k10total,
        level: "Muy Alto",
        description:
          "Alta probabilidad de un trastorno mental; se recomienda visitar a un profesional",
      });
    }

    // WHO5
    const who5total = Object.entries(questions)
      .filter(([key]) => key.includes("who5"))
      .reduce((acc, [_, val]) => acc + Number(val), 0);

    if (who5total >= 0 && who5total <= 12) {
      newDiagnoses.push({
        type: "who5",
        score: who5total,
        level: "Bajo",
        description:
          "Indica bajo bienestar emocional. Riesgo de depresión; se recomienda evaluación profesional.",
      });
    } else if (who5total >= 13 && who5total <= 25) {
      newDiagnoses.push({
        type: "who5",
        score: who5total,
        level: "Adecuado",
        description:
          "Bienestar emocional dentro del rango normal. No se indica riesgo clínico inmediato.",
      });
    }

    // PHQ9
    const phq9total = Object.entries(questions)
      .filter(([key]) => key.includes("phq9"))
      .reduce((acc, [_, val]) => acc + Number(val), 0);

    if (phq9total >= 0 && phq9total <= 4) {
      newDiagnoses.push({
        type: "phq9",
        score: phq9total,
        level: "Mínimo o ninguno",
        description: "No se considera significativo",
      });
    } else if (phq9total >= 5 && phq9total <= 9) {
      newDiagnoses.push({
        type: "phq9",
        score: phq9total,
        level: "Leve",
        description: "Síntomas leves",
      });
    } else if (phq9total >= 10 && phq9total <= 14) {
      newDiagnoses.push({
        type: "phq9",
        score: phq9total,
        level: "Moderado",
        description:
          "Riesgo moderado de depresión; se recomienda una intervención",
      });
    } else if (phq9total >= 15 && phq9total <= 19) {
      newDiagnoses.push({
        type: "phq9",
        score: phq9total,
        level: "Moderadamente severo",
        description:
          "Alta probabilidad de depresión; se recomienda evaluación profesional",
      });
    } else if (phq9total >= 20 && phq9total <= 27) {
      newDiagnoses.push({
        type: "phq9",
        score: phq9total,
        level: "Severo",
        description:
          "Muy alta probabilidad de trastorno depresivo mayor; intervención clima urgente",
      });
    }

    // GAD7
    const gad7total = Object.entries(questions)
      .filter(([key]) => key.includes("gad7"))
      .reduce((acc, [_, val]) => acc + Number(val), 0);

    if (gad7total >= 0 && gad7total <= 4) {
      newDiagnoses.push({
        type: "gad7",
        score: gad7total,
        level: "Mínimo o ninguno",
        description: "No se considera significativo",
      });
    } else if (gad7total >= 5 && gad7total <= 9) {
      newDiagnoses.push({
        type: "gad7",
        score: gad7total,
        level: "Leve",
        description: "Síntomas leves",
      });
    } else if (gad7total >= 10 && gad7total <= 14) {
      newDiagnoses.push({
        type: "gad7",
        score: gad7total,
        level: "Moderado",
        description:
          "Riesgo moderado de depresión; se recomienda una intervención",
      });
    } else if (gad7total >= 15 && gad7total <= 21) {
      newDiagnoses.push({
        type: "gad7",
        score: gad7total,
        level: "Severo",
        description:
          "Alta probabilidad de depresión; se recomienda evaluación profesional",
      });
    }

    // GADS
    const gadsTotal = Object.entries(questions)
      .filter(([key]) => key.includes("gads"))
      .reduce((acc, [_, val]) => acc + Number(val), 0);

    if (gadsTotal >= 0 && gadsTotal <= 4) {
      newDiagnoses.push({
        type: "gads",
        score: gadsTotal,
        level: "Bajo o insignificante",
        description:
          "No se detectan señales fuertes de ansiedad; monitoreo ocasional puede ser útil",
      });
    } else if (gadsTotal >= 5 && gadsTotal <= 9) {
      newDiagnoses.push({
        type: "gads",
        score: gadsTotal,
        level: "Alto riesgo de ansiedad",
        description:
          "Posibles síntomas clínicos de ansiedad; se recomienda evaluación más profunda",
      });
    }

    localStorage.setItem("results", JSON.stringify(newDiagnoses));
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
              <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
                {steps[activeStep].label}
              </Typography>
            </Paper>
            <Box sx={{ height: 255, width: "100%" }}>
              <Typography> {steps[activeStep].description}</Typography>

              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontSize: "0.9rem", mt: 2 }}
                >
                  {steps[activeStep].radio_label}
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
                  {steps[activeStep].options.map((option, index) => (
                    <FormControlLabel
                      key={option.label}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
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
                    Siguiente
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
                  Volver
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
