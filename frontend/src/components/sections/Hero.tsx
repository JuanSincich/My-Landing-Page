import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import theme from "../../../src/theme/Theme";
import Title from "../uiComp/title";
import SocialIconList from "../uiComp/socialIconList/SocialIconList";
import { socialIcons } from "../uiComp/socialIconList/SocialList";

const specilWordColor = {
  color: theme.palette.secondary.main,
  fontWeight: 500,
};

export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "10rem" }}>
      <Container disableGutters>
        <Grid container spacing={8} justifyContent="center">
          <Grid size={6}>
            <Box
              textAlign="end"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "1rem",
                textAlign: "end",
                height: "100%",
              }}
            >
              <Title variant="h3">¡Hola a todos!</Title>
              <Title variant="h2">Soy Juan Sincich</Title>
              <Typography
                variant="h5"
                sx={{ color: theme.palette.secondary.main }}
              >
                Desarrollador web - Diseñador Ux-Ui
              </Typography>
              <Box sx={{ display: "flex" }}>
                <SocialIconList social={socialIcons} />
              </Box>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              component="img"
              src="porfolio_img.jpg"
              alt="Imagen de Juan Sincich"
              sx={{
                width: "100%",
                maxWidth: 300,
                height: "auto",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 20px rgba(68, 44, 246, 0.4)",
                display: "block",
              }}
            />
          </Grid>
          <Grid size={10}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  color: theme.palette.primary.main,
                }}
              >
                <Box component="span" sx={specilWordColor}>
                  Desarrollador Fullstack
                </Box>{" "}
                con experiencia en stack{" "}
                <Box component="span" sx={specilWordColor}>
                  MERN
                </Box>{" "}
                , orientado a crear interfaces limpias, accesibles y centradas
                en el usuario. Actualmente busco oportunidades para seguir
                creciendo en el desarrollo web, integrando diseño{" "}
                <Box component="span" sx={specilWordColor}>
                  UX/UI
                </Box>{" "}
                con tecnologías modernas del frontend.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
