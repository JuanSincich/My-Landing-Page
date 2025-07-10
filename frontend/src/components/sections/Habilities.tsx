import { Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import SkillIconList from "../uiComp/iconSkills/SkillIconList";
import Title from "../uiComp/title";
import {
  frontendSkills,
  backendSkills,
  toolsSkills,
} from "../uiComp/iconSkills/skillsLists";
import { getThemedShadow } from "../../theme/getThemedShadow";

export default function Habilities() {
  const theme = useTheme();

  const basedStyle = {
    display: "flex",
    alignItems: "center",
    boxShadow: getThemedShadow(theme),
    borderRadius: "16px",
    border: `1px solid  `,
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Container
      disableGutters
      sx={{
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column ",
        px: {
          xs: "1rem",
          sm: "1.5rem",
          md: "2rem",
        },
        gap: "2rem",
      }}
    >
      <Title variant="h4" sx={{ textAlign: "center" }}>
        Habilidades y tecnologías
      </Title>
      <Grid container spacing={2} columnSpacing={1}>
        <Grid
          size={{ xs: 5, md: 2 }}
          sx={{ ...basedStyle, margin: { xs: "0 auto", md: "0" } }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
            }}
          >
            Frontend
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{ ...basedStyle, paddingLeft: "1rem" }}
        >
          <SkillIconList skills={frontendSkills} />
        </Grid>
        <Grid
          size={{ xs: 5, md: 2 }}
          sx={{ ...basedStyle, margin: { xs: "0 auto", md: "0" } }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
            }}
          >
            Backend
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{ ...basedStyle, paddingLeft: "1rem" }}
        >
          <SkillIconList skills={backendSkills} />
        </Grid>
        <Grid
          size={{ xs: 5, md: 2 }}
          sx={{ ...basedStyle, margin: { xs: "0 auto", md: "0" } }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
            }}
          >
            Herramientas
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{ ...basedStyle, paddingLeft: "1rem" }}
        >
          <SkillIconList skills={toolsSkills} />
        </Grid>
      </Grid>
    </Container>
  );
}
