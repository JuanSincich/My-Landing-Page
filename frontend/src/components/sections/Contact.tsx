import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/material";
import theme from "../../theme/Theme";
import Title from "../uiComp/title";
import Grid from "@mui/material/Grid";
import { color } from "framer-motion";

export default function Contact() {
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
          /*   onSubmit={} */
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
            /*   value={} */
            /*  onChange={(e) => setPassword(e.target.value)} */
          />
          <TextField
            id="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            /*  value={} */
            /*  onChange={(e) => setEmail(e.target.value)} */
          />
          <TextField
            id="message"
            label="Mensaje"
            type="text"
            multiline
            rows={4}
            fullWidth
            /*   value={} */
            /*  onChange={(e) => setPassword(e.target.value)} */
          />
          <Button
            color="secondary"
            type="submit"
            variant="outlined"
            sx={{ borderRadius: "16px" }}
          >
            enviar
          </Button>
          {/*     <Button type="submit" text="Ingresar" width="400px" align="center">
          fsdf
        </Button> */}
        </Box>
      </Box>
    </Container>
  );
}
