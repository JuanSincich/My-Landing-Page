import { Box } from "@mui/material";
import SocialIcon from "./SocialIcon";

interface SocialIconListProps {
  social: { name: string; url: string }[];
}

export default function SocialIconList({ social }: SocialIconListProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        gap: "1rem",
        py: "1rem",
      }}
    >
      {social.map(({ name, url }) => (
        <SocialIcon key={name} name={name} url={url} />
      ))}
    </Box>
  );
}
