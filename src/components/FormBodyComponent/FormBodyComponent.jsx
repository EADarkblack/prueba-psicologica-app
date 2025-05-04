import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

//Style
import "./FormBodyComponent.css";

const FormBodyComponent = () => {
  const history = useNavigate();

  const [disableButton, setDisableButton] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    document_type: "",
    document: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    switch (field) {
      case "name":
      case "last_name":
      case "document":
        if (!value.trim()) return "Este campo es requerido";
        break;
      case "document_type":
        if (!value) return "Selecciona un tipo de documento válido";
        break;
      case "phone":
        if (!/^\d+$/.test(value)) return "El teléfono debe ser solo números";
        if (value.length < 7)
          return "El teléfono debe tener al menos 7 números";
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) return "Correo electrónico inválido";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setDisableButton(true);

        const response = await fetch(
          "https://prueba-psicologica-api.onrender.com/api/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();

        switch (result?.status) {
          case 200:
            setDisableButton(false);
            history("/cuestionario");

            break;

          default:
            break;
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Errores en el formulario:", newErrors);
    }
  };

  return (
    <div className="home-body-container">
      <div className="home-body-subcontainer">
        <div className="logo-container">
          <img width={400} src="/assets/logo-unad-2.png" alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="terms-and-conditions-container"
        >
          <h1 className="form-title">Ingresa tus datos</h1>
          <div className="form-container">
            <TextField
              label="Nombre"
              variant="outlined"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              size="small"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              error={Boolean(errors.last_name)}
              helperText={errors.last_name}
            />
            <TextField
              select
              label="Tipo de documento"
              size="small"
              name="document_type"
              value={formData.document_type}
              onChange={handleChange}
              error={Boolean(errors.document_type)}
              helperText={errors.document_type}
            >
              <MenuItem value={""}>--Selecciona--</MenuItem>
              <MenuItem value={"CC"}>Cédula de Ciudadanía (CC)</MenuItem>
              <MenuItem value={"TI"}>Tarjeta de Identidad (TI)</MenuItem>
              <MenuItem value={"CE"}>Cédula de Extranjería (CE)</MenuItem>
              <MenuItem value={"PA"}>Pasaporte (PA)</MenuItem>
              <MenuItem value={"RC"}>
                Registro Civil de Nacimiento (RC)
              </MenuItem>
              <MenuItem value={"PEP"}>
                Permiso Especial de Permanencia (PEP)
              </MenuItem>
              <MenuItem value={"PPT"}>
                Permiso por Protección Temporal (PPT)
              </MenuItem>
              <MenuItem value={"NIT"}>
                Número de Identificación Tributaria (NIT)
              </MenuItem>
            </TextField>
            <TextField
              label="Documento"
              variant="outlined"
              size="small"
              name="document"
              value={formData.document}
              onChange={handleChange}
              error={Boolean(errors.document)}
              helperText={errors.document}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              size="small"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            <TextField
              label="Correo electrónico"
              variant="outlined"
              size="small"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <Button disabled={disableButton} type="submit" variant="contained">
              {disableButton ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBodyComponent;
