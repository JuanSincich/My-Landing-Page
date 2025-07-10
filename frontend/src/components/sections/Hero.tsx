import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Title from "../uiComp/title";
import SocialIconList from "../uiComp/socialIconList/SocialIconList";
import { socialIcons } from "../uiComp/socialIconList/SocialList";
import { getThemedShadow } from "../../theme/getThemedShadow";

export default function Hero() {
  const theme = useTheme();

  const specilWordColor = {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  };

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "4rem" }}>
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          px: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
          },
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6, lg: 8 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              textAlign={{ xs: "center", md: "end" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-end" },
                gap: { xs: 0, sm: 1, md: 2, lg: 2 },
                textAlign: { xs: "center", md: "flex-end" },
                height: "100%",
              }}
            >
              <Title
                variant={"h3"}
                responsive={{
                  xs: "h4", // Mobile: 1.5rem (si usas tema estándar)
                  sm: "h4", // Tablet: 1.75rem
                  md: "h3", // Desktop: 2rem
                  lg: "h3", // Pantallas grandes: 2.5rem
                }}
              >
                ¡Hola a todos!
              </Title>
              <Title
                variant="h2"
                responsive={{
                  xs: "h3", // Mobile: 1.5rem (si usas tema estándar)
                  sm: "h3", // Tablet: 1.75rem
                  md: "h2", // Desktop: 2rem
                  lg: "h2", // Pantallas grandes: 2.5rem
                }}
              >
                Soy Juan Sincich
              </Title>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                Desarrollador web - Diseñador Ux-Ui
              </Typography>
              <Box sx={{ display: "flex" }}>
                <SocialIconList social={socialIcons} />
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Box
              component="img"
              src="porfolio_img.jpg"
              alt="Imagen de Juan Sincich"
              sx={{
                width: "100%",
                maxWidth: 300,
                maxHeight: 300,
                height: "auto",
                borderRadius: "1.5rem",
                border:
                  theme.palette.mode === "dark"
                    ? `1px solid ${theme.palette.primary.main}`
                    : null,
                boxShadow:
                  theme.palette.mode === "light"
                    ? getThemedShadow(theme)
                    : null,
                /*  boxShadow: `0px 4px 20px ${themedShadowColor}`, */
                /*   boxShadow: theme.shadows[6], */
                display: "block",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                  borderRadius: "16px",
                  py: "1rem",
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
