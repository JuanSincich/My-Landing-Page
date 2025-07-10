import { Box, useTheme } from "@mui/material";
import { getThemedShadow } from "../../../theme/getThemedShadow";

interface SkillIconProps {
  name: string;
}

export default function SkillIcon({ name }: SkillIconProps) {
  const theme = useTheme();
  return (
    <Box>
      <Box
        component="img"
        src={`https://skillicons.dev/icons?i=${name}`}
        alt={name}
        sx={{
          display: "flex",
          width: "3rem",
          borderRadius: " 12px",
          transition: "transform 0.3s ease",

          "&:hover": {
            transform: "scale(1.2)",
            boxShadow: getThemedShadow(theme),
          },
        }}
      ></Box>
    </Box>
  );
}
