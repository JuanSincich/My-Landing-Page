import { Box } from "@mui/material";
import SkillIcon from "./SkillIcon";

interface SkillIconListProps {
  skills: string[];
}

export default function SkillIconList({ skills }: SkillIconListProps) {
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
      {skills.map((skill) => (
        <SkillIcon key={skill} name={skill} />
      ))}
    </Box>
  );
}
