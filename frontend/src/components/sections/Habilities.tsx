import { Container, Typography } from "@mui/material";
import theme from "../../theme/Theme";
import Grid from "@mui/material/Grid";
import SkillIconList from "../uiComp/iconSkills/SkillIconList";
import Title from "../uiComp/title";
import {
  frontendSkills,
  backendSkills,
  toolsSkills,
} from "../uiComp/iconSkills/skillsLists";

const basedStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.light,
  borderRadius: "24px",
};

const centeredStyle = {
  justifyContent: "center",
};

const fontColor = {
  color: theme.palette.background.default,
};

export default function Habilities() {
  return (
    <Container
      disableGutters
      sx={{
        paddingTop: "6rem",
        display: "flex",
        flexDirection: "column ",
        gap: "2rem",
      }}
    >
      <Title variant="h4" sx={{ textAlign: "center" }}>
        Habilidades y tecnologías
      </Title>
      <Grid container spacing={2} columnSpacing={1}>
        <Grid size={2} sx={{ ...basedStyle, ...centeredStyle }}>
          <Typography variant="h5" sx={{ ...fontColor }}>
            Frontend
          </Typography>
        </Grid>
        <Grid size={10} sx={{ ...basedStyle, paddingLeft: "1rem" }}>
          <SkillIconList skills={frontendSkills} />
        </Grid>
        <Grid size={2} sx={{ ...basedStyle, ...centeredStyle }}>
          <Typography variant="h5" sx={{ ...fontColor }}>
            Backend
          </Typography>
        </Grid>
        <Grid size={10} sx={{ ...basedStyle, paddingLeft: "1rem" }}>
          <SkillIconList skills={backendSkills} />
        </Grid>
        <Grid size={2} sx={{ ...basedStyle, ...centeredStyle }}>
          <Typography variant="h5" sx={{ ...fontColor }}>
            Herramientas
          </Typography>
        </Grid>
        <Grid size={10} sx={{ ...basedStyle, paddingLeft: "1rem" }}>
          <SkillIconList skills={toolsSkills} />
        </Grid>
      </Grid>
    </Container>
  );
}
