import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";
import theme from "../../theme/Theme";
import Title from "../uiComp/title";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const HandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "message") {
      setMessage(value);
    }
  };

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    console.log("Datos del formulario a enviar:", formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Respuesta del backend (éxito):", result);
        alert("¡Mensaje enviado con éxito!");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorResult = await response.json();
        console.error(
          "Error al enviar el formulario:",
          response.status,
          errorResult
        );
        alert(
          `Error al enviar el mensaje: ${
            errorResult.message || "Error desconocido"
          }`
        );
      }
    } catch (error) {
      console.error("Error de conexión o en la solicitud:", error);
      alert(
        "No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };
  return (
    <Container
      disableGutters
      sx={{
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column ",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Title
        variant="h4"
        sx={{ textAlign: "center", color: theme.palette.secondary.main }}
      >
        ¡Contactame!
      </Title>
      <Grid container justifyContent="center">
        <Grid size={10}>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: theme.palette.primary.main,
              }}
            >
              Estoy abierto a nuevas oportunidades y colaboraciones en proyectos
              desafiantes. No dudes en contactarme.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "1rem",
        }}
      >
        <Box
          component="form"
          onSubmit={HandleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "30rem",
          }}
        >
          <TextField
            color="primary"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            value={name}
            onChange={HandleChange}
          />
          <TextField
            id="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            value={email}
            onChange={HandleChange}
          />
          <TextField
            id="message"
            label="Mensaje"
            type="text"
            multiline
            rows={4}
            fullWidth
            value={message}
            onChange={HandleChange}
          />
          <Button
            color="secondary"
            type="submit"
            variant="outlined"
            sx={{
              borderRadius: "16px",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
