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
  /* backgroundColor: theme.palette.primary.light, */
  boxShadow: "0px 4px 5px rgba(68, 44, 246, 0.3)",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.primary.main} `,
};

const centeredStyle = {
  justifyContent: "center",
};

const fontColor = {
  color: theme.palette.primary.main,
};

export default function Habilities() {
  return (
    <Container
      disableGutters
      sx={{
        paddingTop: "4rem",
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
