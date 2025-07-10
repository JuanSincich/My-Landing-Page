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
        px: {
          xs: "1rem",
          sm: "1.5rem",
          md: "2rem",
        },
        gap: "2rem",
      }}
    >
      <Title variant="h4" sx={{ textAlign: "center" }}>
        Certificaciones
      </Title>
      <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} justifyContent="center">
        {certifications.map((cert) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.key}>
            <CertificateImage src={cert.src} alt={cert.alt}></CertificateImage>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
