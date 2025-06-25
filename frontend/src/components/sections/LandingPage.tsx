import { Box } from "@mui/material";
import Hero from "./Hero";
import Habilities from "./Habilities";
import Works from "./Works";
import Contact from "./Contact";
import Certifications from "./Certifications";

export default function LandingPage() {
  return (
    <>
      <Box component="section" id="hero">
        <Hero />
      </Box>
      <Box component="section" id="habilities">
        <Habilities />
      </Box>
      <Box component="section" id="proyects">
        <Works />
      </Box>
      <Box component="section" id="certifications">
        <Certifications />
      </Box>
      <Box component="section" id="contact">
        <Contact />
      </Box>
    </>
  );
}
