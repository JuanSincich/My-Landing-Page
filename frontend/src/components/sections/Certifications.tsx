import { Container } from "@mui/material";
import Title from "../uiComp/title";
import Grid from "@mui/material/Grid";
import { certifications } from "../uiComp/certificationslist/certificationslist";
import CertificateImage from "../uiComp/certificationslist/CertificateImage";

export default function Certifications() {
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
        Certificaciones
      </Title>
      <Grid container spacing={2} justifyContent="center">
        {certifications.map((cert) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <CertificateImage src={cert.src} alt={cert.alt}></CertificateImage>
          </Grid>
        ))}
        {/*   <Grid size={10}>
          <Box component="div" sx={{ textAlign: "center", paddingTop: "3rem" }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: theme.palette.primary.main,
              }}
            >
              Me destaco por mi iniciativa, adaptación y atención al detalle. Me
              formé con cursos especializados de calidad y complemento mi
              aprendizaje de forma constante. Disfruto trabajar en equipo,
              compartir conocimiento y seguir creciendo día a día.
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
}
