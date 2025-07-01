import { alpha, Container } from "@mui/system";
import SocialIconList from "./socialIconList/SocialIconList";
import { Box, Typography } from "@mui/material";
import { socialIcons } from "./socialIconList/SocialList";
import theme from "../../theme/Theme";

export default function Footer() {
  return (
    <Container
      disableGutters
      sx={{
        marginTop: "4rem",
        paddingTop: "1rem",
        display: "flex",
        flexDirection: "column ",
        backgroundColor: alpha(theme.palette.primary.light, 0.1),
        alignItems: "center",
        borderRadius: "16px 16px 0px 0px",
        borderTop: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <SocialIconList social={socialIcons} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "1rem",
        }}
      >
        <Typography>2025 by Juan Sincich</Typography>
        <Typography>Todos los derechos reservados</Typography>
      </Box>
    </Container>
  );
}
