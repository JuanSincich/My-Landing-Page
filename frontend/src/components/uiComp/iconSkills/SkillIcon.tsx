import { Box, Typography } from "@mui/material";
import theme from "../../../theme/Theme";

interface SkillIconProps {
  name: string;
}

export default function SkillIcon({ name }: SkillIconProps) {
  return (
    <Box>
      <Box
        component="img"
        src={`https://skillicons.dev/icons?i=${name}`}
        alt={name}
        sx={{
          display: "flex",
          width: "3rem",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      ></Box>
    </Box>
  );
}
