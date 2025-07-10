import { Container, Button, Box, Typography, useTheme } from "@mui/material";
import Title from "../uiComp/title";
import ProyectCard from "../uiComp/woksFiles/ProyectCard";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { WorkList } from "../uiComp/woksFiles/Workslist";
/* import theme from "../../theme/Theme"; */

export default function Works() {
  const theme = useTheme();

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "dev" | "ux"
  >("all");

  const filteredWorks =
    selectedCategory === "all"
      ? WorkList
      : WorkList.filter((work) => work.category === selectedCategory);

  return (
    <Container
      disableGutters
      sx={{
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column",
        px: {
          xs: "1rem",
          sm: "1.5rem",
          md: "2rem",
        },
        gap: "2rem",
      }}
    >
      <Title variant="h4" sx={{ textAlign: "center" }}>
        Proyectos
      </Title>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Button
          color="secondary"
          variant={selectedCategory === "all" ? "contained" : "outlined"}
          onClick={() => setSelectedCategory("all")}
          sx={{ textTransform: "none", fontSize: "1rem", borderRadius: "16px" }}
        >
          Todos
        </Button>
        <Button
          color="secondary"
          variant={selectedCategory === "dev" ? "contained" : "outlined"}
          onClick={() => setSelectedCategory("dev")}
          sx={{ textTransform: "none", fontSize: "1rem", borderRadius: "16px" }}
        >
          Desarrollo Web
        </Button>
        <Button
          color="secondary"
          variant={selectedCategory === "ux" ? "contained" : "outlined"}
          onClick={() => setSelectedCategory("ux")}
          sx={{ textTransform: "none", fontSize: "1rem", borderRadius: "16px" }}
        >
          UX/UI
        </Button>
      </Box>

      <Grid container spacing={{ xs: 2, sm: 4, md: 4 }} justifyContent="center">
        {filteredWorks.map((work) => (
          <Grid key={work.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProyectCard
              title={work.title}
              description={work.description}
              image={work.image}
              repoUrl={work.repoUrl}
              siteUrl={work.siteUrl}
            />
          </Grid>
        ))}
        <Grid size={10}>
          <Box component="div" sx={{ textAlign: "center", paddingTop: "1rem" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",

                borderBottom: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "16px",
                py: "1rem",
              }}
            >
              Me destaco por mi iniciativa, adaptación y atención al detalle. Me
              formé con cursos especializados de calidad y complemento mi
              aprendizaje de forma constante. Disfruto trabajar en equipo,
              compartir conocimiento y seguir creciendo día a día.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
