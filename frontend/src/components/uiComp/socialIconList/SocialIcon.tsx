import { Box, IconButton, useTheme } from "@mui/material";
import { getThemedShadow } from "../../../theme/getThemedShadow";
interface SkillIconProps {
  name: string;
  url: string;
}

export default function SocialIcon({ name, url }: SkillIconProps) {
  const theme = useTheme();
  return (
    <IconButton
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      sx={{
        width: "3rem",
        height: "3rem",
        /*  transition: "transform 0.8s ease", */
        /* color: "primary.main", */
        color: theme.palette.primary.main,
        /*     "&:hover": {
          boxShadow: "0 4px 20px rgba(68, 44, 246, 0.4)",
        }, */
      }}
    >
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
    </IconButton>
  );
}
