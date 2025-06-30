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
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.key}>
            <CertificateImage src={cert.src} alt={cert.alt}></CertificateImage>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
